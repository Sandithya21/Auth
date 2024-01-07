export const CreateSuccess = (statusCode, message, data) => {
    const successObj = {
        status : statusCode,
        message : successMessage,
        data : data
    }
    return successObj;
}