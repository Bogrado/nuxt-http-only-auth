import useVuelidate from '@vuelidate/core'

export const useValidation = (schema: any, state: any) => {
    const v$ = useVuelidate(schema, state)

    const validateForm = async () => {
        v$.value.$touch()
        return !v$.value.$invalid
    }

    return {
        v$,
        validateForm
    }
}

