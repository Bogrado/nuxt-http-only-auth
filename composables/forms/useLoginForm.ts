import {useValidation} from "~/composables/validation/useValidation";
import {loginSchema} from "~/composables/validation/validationSchemas";

export const useLoginForm = () => {
    const {login, error, clearError} = useAuth()
    const state = reactive({
        email: '',
        password: ''
    })
    const rememberMe = ref(false)

    const {v$, validateForm} = useValidation(loginSchema, state)

    return {
        state,
        rememberMe,
        error,
        v$,
        validateForm
    }
}