using Bucketlist.Common;
using Bucketlist.DataLayer;
using Bucketlist.LogicLayer;
using Bucketlist.ModelLayer.Dto;
using Bucketlist.ModelLayer.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Object.Jwt;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bucketlist.Controllers
{
    [Authorize]
    [Route("auth")]
    public class AuthController : BaseAPIController
    {
        IJwtFactory JwtFactory;
        UserManager<User> UserManager;
        JwtIssuerOptions JwtIssuerOptions;
        IService Service;
        SignInManager<User> SignInManager;
        UserLogic UserLogic;

        public AuthController(IJwtFactory jwtFactory, UserManager<User> userManager, JwtIssuerOptions jwtIssuerOptions, IService service, SignInManager<User> signInManager, UserLogic userLogic)
        {
            JwtFactory = jwtFactory;
            UserManager = userManager;
            Service = service;
            JwtIssuerOptions = jwtIssuerOptions;
            SignInManager = signInManager;
            UserLogic = userLogic;
        }
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login(LoginDetails login)
        {
            try
            {
                User user = await UserManager.FindByEmailAsync(login.Email);

                if (user != null)
                {
                    bool verified = await UserManager.CheckPasswordAsync(user, login.Password);
                    if (!verified)
                        return BadRequest("login failed", isSuccessful: false);
                    jwtObject jwt = new jwtObject();
                    jwt = Tokens.GenerateJwt(JwtFactory, user, JwtIssuerOptions);
                    var signedIn = SignInManager.PasswordSignInAsync(user, login.Password, login.RememberMe, lockoutOnFailure:true).Result;
                    if (!signedIn.Succeeded)
                        return BadRequest();
                    return Ok(jwt, (int)Enums.StatusCode.Success, "Logged in successfully", isSuccessful: true);
                }
                return BadRequest("Login failed");
            }
            catch
            {
                return BadRequest("log in failed", (int)Enums.StatusCode.Error);
            }
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDetailsDto loginDetails)
        {
            try 
            {
                //string emailNmae = $"{loginDetails.Username.Replace(" ", "_")}@gmail.com";
                var checkUser = await UserManager.FindByEmailAsync(loginDetails.Username);
                if (checkUser != null)
                    return BadRequest("registration failed", (int)Enums.StatusCode.Error);
                if (loginDetails.Password != loginDetails.ConfirmPassword)
                    return BadRequest("registration failed", (int)Enums.StatusCode.Error);
                User user = new User
                {
                    Email = loginDetails.Username,
                    PasswordHash = loginDetails.Password,
                    UserName = loginDetails.Username
                };
                var done = await UserManager.CreateAsync(user, loginDetails.Password);
                if (!done.Succeeded)
                    return BadRequest();
                return Ok("registeration successful", (int)Enums.StatusCode.Success, isSuccessful: true);
            }
            catch (Exception ex)
            {
                return BadRequest("registration failed", (int)Enums.StatusCode.Error);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            try
            {
                ClaimsPrincipal claimsPrincipal = new ClaimsPrincipal();
                var signedIn = SignInManager.IsSignedIn(claimsPrincipal);
                if (!signedIn)
                    return BadRequest();
                await SignInManager.SignOutAsync();
                return Ok("Logged out");
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
