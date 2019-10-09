import toastr from 'toastr'
export * from './authorization';

export const utilityAction = {
    refreshPage
}

export function refreshPage() {
    window.location.reload()
}


export const showSuccessfulMessage = (msg) => {
    toastr["success"](msg)

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}
export const showErrorMessage = (msg) => {
    toastr["error"](msg)

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}
export const showWarningMessage = (msg) => {
    toastr["warning"](msg)

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}

export function cleanDate(date) {
    if (date != undefined) {
        let newDate = date.substring(0, 10);
        // console.log("newDate", newDate);
        return newDate;
    } else {
        return date;
    }
}
export function toTimestamp(strDate) {
    var datum = Date.parse(cleanDate(strDate));
    return datum / 1000;
}
