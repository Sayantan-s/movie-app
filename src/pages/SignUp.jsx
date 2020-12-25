import React from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button.component'
import Input from '../components/ui/Input.component'
import AuthSecondaryRoutes from '../utils/AuthSecondaryRoutes.component'
import { useForm } from '../utils/customHooks'
import { Mail, PasswordShow, UserName } from '../utils/Icons'
import Spinner from '../utils/Spinner.component'

const SignUp = () => {
    const [form,handleChange] = useForm({
        name : '',
        email : '',
        password : '',
        confpassword: ''
    })

    const {name,email,password,confpassword} = form
    const [ uploadtimeState,setUploadTime ] = React.useState(false);
    const InputProps = {
        name : {
            inpType : 'input',
            ElementConfig : {
                type : 'text',
                placeholder : 'Your name'
            },
            value: name,
            Icon : UserName
        },
        email : {
            inpType : 'input',
            ElementConfig : {
                type : 'email',
                placeholder : 'Your email'
            },
            value: email,
            Icon : Mail
        },
        password : {
            inpType : 'input',
            ElementConfig : {
                type : 'password',
                placeholder : 'Your password'
            },
            value : password,
            Icon : PasswordShow
        },
        confpassword : {
            inpType : 'input',
            ElementConfig : {
                type : 'password',
                placeholder : 'Confirm password'
            },
            value: confpassword,
            Icon : PasswordShow
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
    const SubmitHandler = async (eve) => {
        eve.preventDefault();
        await console.log(form)
    }
    return (
       <Form onSubmit={SubmitHandler}>
        {
            InputItems.map(({key,data}) => {
                return <Input
                key={key}
                {...data}
                onChange={handleChange}
                />
            })
        }
       <SubmitButton>
           <span>Register</span>
            {uploadtimeState && <Spinner />}  
       </SubmitButton>
       <AuthSecondaryRoutes 
       text="Already a user?"
       linktext="Login"
       to="/login"
       />
       </Form>
    )
}

export default SignUp


const Form = styled.form`
    display: flex;
    gap : 1rem;
    flex-direction: column;
    width : 400px;
`
const SubmitButton = styled(Button)`
width:80%;
cursor:pointer;
background-color : #706bfa;
color : #fff;
align-self: center;
display : flex;
align-items: center;
justify-items : center;
justify-content: center;
gap: 0.5rem;
`