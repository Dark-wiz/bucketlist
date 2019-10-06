using Bucketlist.DataLayer;
using Bucketlist.ModelLayer.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Bucketlist.LogicLayer
{
    public class CoreLogic<E> where E : class
    {
        protected ApplicationDbContext context;
        protected IService repository;
        protected const string ArgumentNullException = "Null object argument. Please contact your system administrator";
        protected const string UpdateException = "Operation failed due to update exception!";
        protected const string NoItemModified = "No item modified!";
        protected const string NoItemFound = "No item found to be modified!";
        protected const string NoItemRemoved = "No item removed!";
        protected const string ErrowDuringProccesing = "Error Occurred During Processing.";

        public CoreLogic(IService service)
        {
            repository = service;
        }


        public virtual E GetEntityBy(Expression<Func<E, bool>> selector, string includeProperties = "")
        {
            try
            {
                return repository.GetSingleBy(selector, includeProperties);
            }
            catch (Exception)

            {
                throw;
            }
        }
        public virtual List<E> GetAllEntities()
        {
            try
            {
                return repository.GetAll<E>().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public virtual List<E> GetEntitiesBy(Expression<Func<E, bool>> selector = null, Func<IQueryable<E>, IOrderedQueryable<E>> orderBy = null, string includeProperties = "")
        {
            try
            {
                return repository.GetBy(selector, orderBy, includeProperties).ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }


        public bool Delete(Expression<Func<E, bool>> selector)
        {
            try
            {
                repository.Delete(selector);
                return Save() > 0 ? true : false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public bool Delete(object id)
        {
            try
            {
                repository.Delete(id);
                return Save() > 0 ? true : false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public int Save()
        {
            return repository.Save();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (repository != null)
                {
                    repository.Dispose();
                    repository = null;
                }
            }
        }
        public virtual E AddEntity(E entity)
        {
            try
            {

                E addedEntity = repository.Add(entity);

                //repository.Save(); // ToDo: Remove this and create a unit of work for each entity domain

                return addedEntity;
            }
            catch (ArgumentNullException)
            {
                throw new ArgumentNullException(ArgumentNullException);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

}
