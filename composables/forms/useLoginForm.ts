import {useValidation} from "~/composables/validation/useValidation";
import {email, minLength, required} from "@vuelidate/validators";

export const useLoginForm = () => {
    const {error} = useAuth()
    const state = reactive({
        email: '',
        password: ''
    })
    const rememberMe = ref(false)

    const rules = {
        email: {required, email},
        password: {required, minLength: minLength(5)}
    }

    const {v$, validateForm} = useValidation(rules, state)

    return {
        state,
        rememberMe,
        error,
        v$,
        validateForm
    }
}