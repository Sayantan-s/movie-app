import React from 'react'
import Input from '../components/ui/Input.component'
import { useForm } from '../utils/customHooks'

const SignUp = () => {
    const [{name,email,password,confpassword},handleChange] = useForm({
        name : '',
        email : '',
        password : '',
        confpassword: ''
    })
    const InputProps = {
        name : {
            inpType : 'input',
            ElementConfig : {
                type : 'text',
                placeholder : 'Your name'
            },
            value: name
        },
        email : {
            inpType : 'input',
            ElementConfig : {
                type : 'email',
                placeholder : 'Your email'
            },
            value: email
        },
        password : {
            inpType : 'input',
            ElementConfig : {
                type : 'password',
                placeholder : 'Your password'
            },
            value : password
        },
        confpassword : {
            inpType : 'input',
            ElementConfig : {
                type : 'password',
                placeholder : 'Confirm password'
            },
            value: confpassword
        }
    }
    let InputItems = [];
    for(let i in InputProps){
        InputItems.push({
            key : i,
            data : {
                ...InputProps[i],
                ElementConfig : {
                    ...InputProps[i].ElementConfig,
                    name : i
                }
            }
        })
    }
    console.log(InputItems)
    return (
       <form>
        {
            InputItems.map(({key,data}) => {
                return <Input
                key={key}
                {...data}
                onChange={handleChange}
                />
            })
        }
       </form>
    )
}

export default SignUp
