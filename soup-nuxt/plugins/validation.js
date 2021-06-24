import { extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', required)
extend('min', min)
extend('email', email)
