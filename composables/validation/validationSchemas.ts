import {email as emailValidator, email, maxLength, minLength, numeric, required, url} from '@vuelidate/validators'

export const loginSchema = {
    email: {required, email},
    password: {required}
}

export const registerSchema = (state: any) => ({
    fullName: {required, minLength: minLength(3)}, // Ян, соболезную
    email: {required, email},
    password: {required, minLength: minLength(5)},
    confirmPassword: {required, sameAsPassword: (value: any) => value === state.password} // из-за кривого sameAs приходится вот так извращаться
})