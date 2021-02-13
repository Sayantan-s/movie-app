import { motion } from 'framer-motion'
import React from 'react'

export const Search = ({size,className}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7555 20.6065L18.3182 17.2458L18.2376 17.1233C18.0878 16.9742 17.883 16.8902 17.6692 16.8902C17.4554 16.8902 17.2505 16.9742 17.1007 17.1233C14.1795 19.8033 9.67815 19.949 6.58201 17.4637C3.48586 14.9784 2.75567 10.6334 4.87568 7.31017C6.9957 3.98697 11.3081 2.71685 14.9528 4.34214C18.5976 5.96743 20.4438 9.98379 19.267 13.7276C19.1823 13.9981 19.2515 14.2922 19.4487 14.4992C19.6459 14.7062 19.9411 14.7946 20.223 14.7311C20.505 14.6676 20.7309 14.4619 20.8156 14.1914C22.2224 9.74864 20.0977 4.96755 15.8161 2.94106C11.5345 0.914562 6.38084 2.25082 3.68905 6.08542C0.99727 9.92001 1.57518 15.1021 5.04893 18.2795C8.52268 21.4569 13.8498 21.6759 17.5841 18.7949L20.6277 21.7705C20.942 22.0765 21.4502 22.0765 21.7645 21.7705C22.0785 21.4602 22.0785 20.9606 21.7645 20.6503L21.7555 20.6065Z" fill="#200E32"/>
</svg>


export const Avatar = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 49.16 59"><title>account</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="account"><path d="M49,50.74a25.08,25.08,0,0,0-48.81,0,6.63,6.63,0,0,0,1.27,5.66A6.85,6.85,0,0,0,6.85,59H42.32a6.83,6.83,0,0,0,5.39-2.61A6.62,6.62,0,0,0,49,50.74Z"/><path d="M24.58,26.62A13.31,13.31,0,1,0,11.27,13.31,13.32,13.32,0,0,0,24.58,26.62Z"/></g></g></g></svg>

export const PasswordShow = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0021 4C16.1381 4.00199 19.853 6.88632 21.94 11.7138C22.02 11.8966 22.02 12.1034 21.94 12.2872C21.692 12.8607 21.416 13.4183 21.118 13.9411C20.919 14.293 20.475 14.4152 20.121 14.2184C19.769 14.0196 19.645 13.5773 19.843 13.2275C20.065 12.8369 20.275 12.4244 20.468 12C18.601 7.89614 15.4531 5.45608 12.0001 5.45509C8.54617 5.45608 5.39821 7.89614 3.53123 12C5.39821 16.1039 8.54617 18.5449 12.0001 18.5449C14.0081 18.5449 15.9451 17.714 17.6021 16.1406C17.8951 15.8653 18.357 15.8753 18.636 16.1655C18.916 16.4547 18.904 16.9149 18.612 17.1922C16.6791 19.028 14.3941 19.999 12.0021 20H11.9981H11.9971C7.86218 19.998 4.14722 17.1147 2.05925 12.2872C1.98025 12.1044 1.98025 11.8966 2.05925 11.7138C4.14722 6.88632 7.86218 4.00199 11.9971 4H12.0001H12.0021ZM10.7486 14.0789C11.1246 14.3035 11.5576 14.4218 11.9996 14.4218C13.3426 14.4218 14.4356 13.3354 14.4356 11.9996C14.4356 10.6658 13.3426 9.57943 11.9996 9.57943C10.6566 9.57943 9.56366 10.6658 9.56366 11.9996C9.56366 12.4021 9.23566 12.7271 8.83166 12.7271C8.42767 12.7271 8.10067 12.4021 8.10067 11.9996C8.10067 9.86269 9.84965 8.12434 11.9996 8.12434C14.1496 8.12434 15.8986 9.86269 15.8986 11.9996C15.8986 14.1375 14.1496 15.8759 11.9996 15.8759C11.2916 15.8759 10.5986 15.685 9.99565 15.3242C9.64865 15.1185 9.53666 14.6712 9.74565 14.3264C9.95365 13.9835 10.4036 13.8692 10.7486 14.0789Z" fill={fill}/>
</svg>
export const PasswordHide = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 9.5998C10.6551 9.5998 9.56112 10.6757 9.56112 12.0007C9.56112 12.3915 9.66712 12.7636 9.84712 13.1013L13.1191 9.88035C12.7771 9.70415 12.3951 9.5998 12.0001 9.5998ZM19.3851 3.71115C19.6711 3.42962 20.1341 3.42962 20.4201 3.71115C20.7061 3.99269 20.7061 4.44846 20.4201 4.73L4.61512 20.2884C4.47212 20.4291 4.28512 20.5 4.09812 20.5C3.91012 20.5 3.72312 20.4291 3.58012 20.2884C3.29412 20.0068 3.29412 19.551 3.58012 19.2705L8.77612 14.1546C8.33712 13.5246 8.09812 12.7814 8.09812 12.0007C8.09812 9.88232 9.84812 8.15963 12.0001 8.15963C12.7871 8.15963 13.5531 8.39785 14.1901 8.82508L16.2241 6.82381C13.3561 4.98693 9.85912 5.14443 7.12712 7.27368C5.68412 8.39096 4.44512 10.0211 3.53212 12.0017C3.93812 12.8867 4.41012 13.7028 4.93612 14.4312C5.17012 14.7551 5.09312 15.2049 4.76412 15.4353C4.63512 15.5259 4.48712 15.5692 4.34012 15.5692C4.11112 15.5692 3.88612 15.4648 3.74312 15.266C3.10112 14.3771 2.53412 13.374 2.05913 12.2842C1.98013 12.1031 1.98013 11.8964 2.06013 11.7153C3.08112 9.38816 4.51912 7.46071 6.22112 6.14261C9.51912 3.57432 13.8511 3.44734 17.2771 5.78724L19.3851 3.71115ZM21.94 11.7142C21.407 10.5044 20.771 9.40971 20.047 8.46371C19.803 8.14575 19.345 8.08177 19.023 8.32097C18.699 8.56117 18.635 9.01202 18.878 9.32998C19.475 10.1106 20.009 11.0074 20.468 12.0006C18.592 16.0662 15.445 18.4829 12 18.4829C11.22 18.4829 10.444 18.3579 9.69402 18.1118C9.30902 17.9887 8.89602 18.1895 8.76902 18.5675C8.64102 18.9446 8.84802 19.3521 9.23102 19.4791C10.13 19.7744 11.062 19.924 12 19.924C16.127 19.924 19.843 17.0683 21.94 12.2851C22.02 12.104 22.02 11.8963 21.94 11.7142ZM14.3907 12.4276C14.2127 13.4021 13.4287 14.1759 12.4387 14.3521C12.0407 14.4239 11.7767 14.799 11.8487 15.1908C11.9127 15.5383 12.2217 15.7814 12.5677 15.7814C12.6117 15.7814 12.6557 15.7775 12.6997 15.7706C14.2877 15.4861 15.5467 14.2457 15.8307 12.6825C15.9027 12.2898 15.6377 11.9157 15.2397 11.8458C14.8447 11.7749 14.4617 12.0378 14.3907 12.4276Z" fill={fill}/>
</svg>

export const UserName = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.95693 7.61849C5.95693 8.03115 5.62096 8.36607 5.20698 8.36607C4.79301 8.36607 4.45703 8.03115 4.45703 7.61849C4.45703 4.79659 6.75988 2.5 9.59169 2.5C12.4225 2.5 14.7253 4.79659 14.7253 7.61849C14.7253 10.4404 12.4225 12.737 9.59169 12.737C8.43177 12.737 7.33884 12.3652 6.4329 11.6614C6.10592 11.4073 6.04693 10.9378 6.30191 10.6118C6.55689 10.2869 7.02686 10.2281 7.35384 10.4812C7.9948 10.9786 8.76874 11.2418 9.59169 11.2418C11.5956 11.2418 13.2254 9.61604 13.2254 7.61849C13.2254 5.62093 11.5956 3.99518 9.59169 3.99518C7.58682 3.99518 5.95693 5.62093 5.95693 7.61849ZM15.2693 10.8872C15.2693 10.4746 15.6053 10.1397 16.0193 10.1397C17.4242 10.1397 18.5661 9.00033 18.5661 7.60084C18.5661 6.20136 17.4242 5.06203 16.0193 5.06203C15.6053 5.06203 15.2693 4.72711 15.2693 4.31445C15.2693 3.90178 15.6053 3.56686 16.0193 3.56686C18.2511 3.56686 20.066 5.37702 20.066 7.60084C20.066 9.82566 18.2511 11.6348 16.0193 11.6348C15.6053 11.6348 15.2693 11.2999 15.2693 10.8872ZM19.3144 13.9618C20.5793 14.21 21.4123 14.7204 21.7743 15.4779C22.0752 16.1089 22.0752 16.8306 21.7743 17.4615C21.4173 18.2121 20.5853 18.7255 19.3024 18.9876C19.2514 18.9976 19.2014 19.0026 19.1504 19.0026C18.8025 19.0026 18.4895 18.7593 18.4175 18.4055C18.3345 18.0008 18.5955 17.6061 19.0015 17.5233C19.7644 17.3678 20.2814 17.1117 20.4194 16.8206C20.5253 16.5973 20.5253 16.3421 20.4204 16.1209C20.2794 15.8278 19.7644 15.5736 19.0065 15.4251C18.4945 15.3115 17.9885 15.2387 17.4836 15.2048C17.0706 15.1759 16.7586 14.8201 16.7876 14.4084C16.8156 13.9947 17.1806 13.6917 17.5865 13.7126C18.1655 13.7525 18.7465 13.8362 19.3144 13.9618ZM9.59149 14.4178C7.71361 14.4178 2 14.4178 2 17.9694C2 18.7668 2.31698 19.8742 3.82388 20.6119C4.28885 20.8381 4.85281 21.0225 5.49976 21.1601C5.90474 21.2488 6.30271 20.9886 6.3887 20.585C6.4757 20.1803 6.21672 19.7835 5.81174 19.6978C5.28478 19.5862 4.83781 19.4416 4.48383 19.2682C3.61189 18.8416 3.4999 18.3502 3.4999 17.9694C3.4999 16.2689 6.81267 15.913 9.59149 15.913C13.6332 15.913 15.6821 16.5988 15.6821 17.9495C15.6821 19.649 12.3703 20.0048 9.59149 20.0048C9.17752 20.0048 8.84154 20.3397 8.84154 20.7524C8.84154 21.1661 9.17752 21.5 9.59149 21.5C11.4684 21.5 17.182 21.5 17.182 17.9495C17.182 14.7837 12.8503 14.4178 9.59149 14.4178Z" fill={fill}/>
</svg>

export const Mail = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 10.3069C22 10.7006 21.6832 11.0198 21.2923 11.0198L21.2835 11.002C21.0958 11.002 20.9158 10.9269 20.7831 10.7932C20.6504 10.6595 20.5759 10.4782 20.5759 10.2891V8.84554C20.5519 6.41955 18.6055 4.45879 16.1973 4.43465H7.80274C5.39451 4.45879 3.44811 6.41955 3.42415 8.84554V15.1545C3.44811 17.5805 5.39451 19.5412 7.80274 19.5653H16.1973C18.6055 19.5412 20.5519 17.5805 20.5759 15.1545C20.6163 14.7891 20.923 14.5127 21.2879 14.5127C21.6529 14.5127 21.9595 14.7891 22 15.1545C21.9903 18.3788 19.398 20.9902 16.1973 21H7.80274C4.6 20.9951 2.00487 18.3808 2 15.1545V8.84554C2 5.61714 4.59798 3 7.80274 3H16.1973C19.398 3.00979 21.9903 5.6212 22 8.84554V10.3069ZM12.7386 11.8574L16.8518 8.54257H16.8607C17.167 8.29731 17.6119 8.34491 17.8602 8.6495C17.9785 8.798 18.0329 8.988 18.0113 9.17715C17.9897 9.36629 17.8939 9.53888 17.7452 9.65644L13.632 12.9802C12.5862 13.828 11.0954 13.828 10.0495 12.9802L5.92747 9.65644C5.6251 9.40629 5.57785 8.95805 5.82132 8.6495C5.93771 8.50163 6.10817 8.40703 6.29443 8.38693C6.4807 8.36682 6.66718 8.4229 6.81203 8.54257L10.9695 11.8574C11.4888 12.2679 12.2193 12.2679 12.7386 11.8574Z"  fill={fill}/>
</svg>

export const Google = ({ size,...otherProps }) => <svg {...otherProps} width={size} height={size} viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>

export const Facebook = ({ size,fill,...otherProps }) => <svg {...otherProps} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" fill={fill}>
<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z" />
</svg>


export const Video = ({size,fill}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0205 7.06859C20.4185 6.78178 19.7229 6.86723 19.2078 7.29157L17.6332 8.58912C17.321 8.84647 17.2751 9.3101 17.5307 9.62638C17.7863 9.93972 18.2478 9.98687 18.561 9.72854L20.1356 8.43098C20.2381 8.34651 20.3424 8.37499 20.3941 8.39955C20.4478 8.42607 20.5366 8.48795 20.5366 8.62547V15.3745C20.5366 15.512 20.4478 15.5739 20.3941 15.6005C20.3424 15.626 20.238 15.6535 20.1346 15.569L16.4059 12.4946V8.58716C16.4059 6.18064 14.6888 4.5 12.2302 4.5H6.17561C3.71707 4.5 2 6.18064 2 8.58716V15.4236C2 17.8233 3.71317 19.5 6.16585 19.5C6.56976 19.5 6.89756 19.17 6.89756 18.7633C6.89756 18.3567 6.56976 18.0266 6.16585 18.0266C4.49854 18.0266 3.46341 17.0296 3.46341 15.4236V8.58716C3.46341 6.9743 4.50244 5.97338 6.17561 5.97338H12.2302C13.9034 5.97338 14.9424 6.9743 14.9424 8.58716V15.4236C14.9424 17.0296 13.9034 18.0266 12.2302 18.0266H10.5434C10.1395 18.0266 9.81171 18.3567 9.81171 18.7633C9.81171 19.17 10.1395 19.5 10.5434 19.5H12.2302C14.6888 19.5 16.4059 17.8233 16.4059 15.4236V14.3992L19.2078 16.7084C19.52 16.9668 19.8995 17.0994 20.2839 17.0994C20.5327 17.0994 20.7834 17.0444 21.0205 16.9314C21.6244 16.6436 22 16.0474 22 15.3745V8.62547C22 7.95262 21.6244 7.35639 21.0205 7.06859Z" fill={fill}/>
</svg>

export const Ticket = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 10.0384C22 10.4272 21.675 10.7428 21.2745 10.7428C20.5616 10.7428 19.9812 11.3073 19.9812 11.9995C19.9812 12.6918 20.5616 13.2553 21.2745 13.2553C21.467 13.2553 21.6518 13.3295 21.7872 13.4619C21.9236 13.5934 22 13.7738 22 13.9597L21.999 16.3257C21.999 18.3526 20.3014 20 18.214 20H5.78603C3.69956 20 2.00193 18.3526 2.00193 16.3257L2 13.8837C2 13.6977 2.07642 13.5173 2.21281 13.3849C2.3492 13.2534 2.53299 13.1792 2.72548 13.1792C3.46257 13.1792 4.01877 12.672 4.01877 11.9995C4.01877 11.3073 3.43935 10.7428 2.72548 10.7428C2.32501 10.7428 2 10.4272 2 10.0384V7.67432C2 5.64837 3.69762 4 5.7841 4H7.00967C7.41014 4 7.73515 4.31559 7.73515 4.70443C7.73515 5.09328 7.41014 5.40886 7.00967 5.40886H5.7841C4.49758 5.40886 3.45096 6.42512 3.45096 7.67432V9.42882C4.61366 9.73877 5.46972 10.7729 5.46972 11.9995C5.46972 13.213 4.6272 14.2068 3.45192 14.4998L3.45289 16.3257C3.45289 17.5749 4.49952 18.5911 5.78603 18.5911H13.0273V17.3936C13.0273 17.0048 13.3523 16.6892 13.7528 16.6892C14.1532 16.6892 14.4782 17.0048 14.4782 17.3936V18.5911H18.214C19.5015 18.5911 20.5481 17.5749 20.5481 16.3257L20.549 14.5693C19.3863 14.2593 18.5303 13.2252 18.5303 11.9995C18.5303 10.7729 19.3863 9.73877 20.549 9.42882V7.67432C20.549 6.42512 19.5024 5.40886 18.2159 5.40886H14.4782V6.97834C14.4782 7.36719 14.1532 7.68277 13.7528 7.68277C13.3523 7.68277 13.0273 7.36719 13.0273 6.97834V5.40886H11.0636C10.6632 5.40886 10.3382 5.09328 10.3382 4.70443C10.3382 4.31559 10.6632 4 11.0636 4H18.2159C20.3024 4 22 5.64837 22 7.67432V10.0384ZM14.4783 14.1678C14.4783 14.5566 14.1533 14.8722 13.7529 14.8722C13.3524 14.8722 13.0274 14.5566 13.0274 14.1678V10.4108C13.0274 10.022 13.3524 9.70637 13.7529 9.70637C14.1533 9.70637 14.4783 10.022 14.4783 10.4108V14.1678Z" fill={fill}/>
</svg>

export const Profile = ({ size,fill,...otherProps }) => <motion.svg {...otherProps}  width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.05836 7.35387C8.05836 5.19392 9.82642 3.43696 12 3.43696C14.1736 3.43696 15.9416 5.19392 15.9416 7.35387C15.9416 9.51281 14.1736 11.2698 12 11.2698C9.82642 11.2698 8.05836 9.51281 8.05836 7.35387ZM6.61233 7.35387C6.61233 10.3048 9.02943 12.7067 12 12.7067C14.9706 12.7067 17.3867 10.3048 17.3867 7.35387C17.3867 4.40194 14.9706 2 12 2C9.02943 2 6.61233 4.40194 6.61233 7.35387ZM10.9776 21.985C11.3127 21.995 11.6538 22 12 22C15.4345 22 20 21.619 20 18.3301C20 14.6392 13.9784 14.6392 12 14.6392C8.56553 14.6392 4 15.0202 4 18.3101C4 19.2951 4.46088 20.624 6.6566 21.363C7.03597 21.493 7.44453 21.288 7.57333 20.913C7.70113 20.538 7.49887 20.131 7.1205 20.004C5.61811 19.4981 5.44503 18.7951 5.44503 18.3101C5.44503 16.8271 7.65082 16.0751 12 16.0751C16.3492 16.0751 18.555 16.8341 18.555 18.3301C18.555 19.8121 16.3492 20.563 12 20.563C11.6679 20.563 11.3409 20.559 11.0189 20.55C10.6325 20.553 10.2883 20.851 10.2772 21.247C10.2652 21.644 10.5791 21.975 10.9776 21.985Z" fill={fill}/>
</motion.svg>

export const ProfileBold = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z" fill={fill}/>
</svg>


export const Logout = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.50004 13.9489C3.50004 14.3527 3.16404 14.6804 2.75012 14.6804C2.3362 14.6804 2.00019 14.3527 2.00019 13.9489V6.71437C2.00019 4.39058 3.93831 2.5 6.32151 2.5H11.0675C13.4555 2.5 15.3985 4.39533 15.3985 6.72482V7.6093C15.3985 8.01212 15.0625 8.33988 14.6486 8.33988C14.2347 8.33988 13.8987 8.01212 13.8987 7.6093V6.72482C13.8987 5.20096 12.6287 3.96306 11.0675 3.96306H6.32151C4.76517 3.96306 3.50004 5.19811 3.50004 6.71437V13.9489ZM13.8985 16.3916C13.8985 15.9879 14.2345 15.6601 14.6484 15.6601C15.0623 15.6601 15.3983 15.9879 15.3983 16.3916V17.2856C15.3983 19.6094 13.4602 21.5 11.077 21.5H6.33008C3.94298 21.5 2 19.6047 2 17.2752C2 16.8714 2.336 16.5446 2.74992 16.5446C3.16384 16.5446 3.49985 16.8714 3.49985 17.2752C3.49985 18.799 4.76985 20.0369 6.33008 20.0369H11.077C12.6333 20.0369 13.8985 18.8028 13.8985 17.2856V16.3916ZM21.9433 11.7209C21.8274 11.4463 21.5537 11.2677 21.2499 11.2677H9.5491C9.13518 11.2677 8.7982 11.5964 8.7982 12.0002C8.7982 12.404 9.13518 12.7317 9.5491 12.7317H19.4345L17.8752 14.2461C17.5811 14.5311 17.5811 14.9938 17.8732 15.2807C18.0193 15.4241 18.2122 15.4963 18.404 15.4963C18.5959 15.4963 18.7868 15.4241 18.9339 15.2826L21.7797 12.5189C21.9939 12.3099 22.0592 11.9945 21.9433 11.7209ZM19.1218 10.6607C18.9309 10.6607 18.74 10.5895 18.594 10.4489L17.8762 9.7563C17.582 9.47223 17.5801 9.00862 17.8713 8.72265C18.1635 8.43384 18.6368 8.43194 18.9319 8.71695L19.6487 9.40858C19.9438 9.69359 19.9458 10.1563 19.6546 10.4432C19.5075 10.5876 19.3147 10.6607 19.1218 10.6607Z" fill={fill}/>
</svg>

export const FacebookF = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
<path d="M23.446 18l0.889-5.791h-5.557v-3.758c0-1.584 0.776-3.129 3.265-3.129h2.526v-4.93c0 0-2.292-0.391-4.484-0.391-4.576 0-7.567 2.774-7.567 7.795v4.414h-5.087v5.791h5.087v14h6.26v-14z"/>
</svg>

export const Paypal = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
<path d="M10.962 18.494c-0.219 1.2-1.087 6.794-1.344 8.375-0.019 0.113-0.063 0.156-0.188 0.156h-4.662c-0.475 0-0.819-0.412-0.756-0.869l3.663-23.244c0.094-0.6 0.631-1.056 1.25-1.056 9.519 0 10.319-0.231 12.75 0.713 3.756 1.456 4.1 4.969 2.75 8.769-1.344 3.913-4.531 5.594-8.756 5.644-2.712 0.044-4.344-0.438-4.706 1.512zM26.319 9.5c-0.113-0.081-0.156-0.113-0.188 0.081-0.125 0.712-0.319 1.406-0.55 2.1-2.494 7.113-9.406 6.494-12.781 6.494-0.381 0-0.631 0.206-0.681 0.587-1.412 8.775-1.694 10.606-1.694 10.606-0.063 0.444 0.219 0.806 0.662 0.806h3.969c0.538 0 0.981-0.394 1.088-0.931 0.044-0.337-0.069 0.381 0.9-5.706 0.288-1.375 0.894-1.231 1.831-1.231 4.438 0 7.9-1.8 8.931-7.019 0.406-2.175 0.288-4.463-1.487-5.788z"/>
</svg>

export const Squarespace = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
<path d="M30.208 11.625c-2.405-2.401-6.301-2.401-8.755 0l-9.803 9.801c-0.599 0.6-0.599 1.6 0 2.199 0.604 0.599 1.604 0.599 2.204 0l9.801-9.803c1.199-1.197 3.147-1.197 4.349 0 1.203 1.204 1.203 3.151 0 4.355l-9.651 9.651c1.197 1.199 3.151 1.199 4.348 0l7.453-7.453c2.448-2.448 2.448-6.348 0.052-8.749zM26.907 14.875c-0.6-0.599-1.6-0.599-2.199 0l-9.807 9.855c-1.199 1.197-3.147 1.197-4.349 0-0.599-0.604-1.599-0.604-2.197 0-0.605 0.599-0.605 1.599 0 2.197 2.4 2.401 6.296 2.401 8.749 0l9.803-9.801c0.599-0.652 0.599-1.652 0-2.251zM23.656 5.073c-2.401-2.401-6.301-2.401-8.755 0l-9.803 9.801c-0.599 0.599-0.599 1.599 0 2.199 0.604 0.604 1.604 0.604 2.204 0l9.859-9.803c1.199-1.197 3.161-1.197 4.36 0 0.604 0.604 1.604 0.604 2.197 0 0.563-0.645 0.563-1.593-0.036-2.197zM20.355 8.323c-0.6-0.599-1.6-0.599-2.199 0l-9.801 9.855c-1.199 1.197-3.152 1.197-4.355 0-1.197-1.199-1.197-3.151 0-4.355l9.651-9.651c-1.197-1.199-3.145-1.199-4.348 0l-7.5 7.453c-2.401 2.401-2.401 6.301 0 8.749 2.4 2.401 6.296 2.401 8.749 0l9.803-9.801c0.599-0.652 0.599-1.652 0-2.251z"/>
</svg>


export const Star = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9185 14.3201C17.6595 14.5711 17.5405 14.9341 17.5995 15.2901L18.4885 20.2101C18.5635 20.6271 18.3875 21.0491 18.0385 21.2901C17.6965 21.5401 17.2415 21.5701 16.8685 21.3701L12.4395 19.0601C12.2855 18.9781 12.1145 18.9341 11.9395 18.9291H11.6685C11.5745 18.9431 11.4825 18.9731 11.3985 19.0191L6.96851 21.3401C6.74951 21.4501 6.50151 21.4891 6.25851 21.4501C5.66651 21.3381 5.27151 20.7741 5.36851 20.1791L6.25851 15.2591C6.31751 14.9001 6.19851 14.5351 5.93951 14.2801L2.32851 10.7801C2.02651 10.4871 1.92151 10.0471 2.05951 9.65011C2.19351 9.25411 2.53551 8.96511 2.94851 8.90011L7.91851 8.17911C8.29651 8.14011 8.62851 7.91011 8.79851 7.57011L10.9885 3.08011C11.0405 2.98011 11.1075 2.88811 11.1885 2.81011L11.2785 2.74011C11.3255 2.68811 11.3795 2.64511 11.4395 2.61011L11.5485 2.57011L11.7185 2.50011H12.1395C12.5155 2.53911 12.8465 2.76411 13.0195 3.10011L15.2385 7.57011C15.3985 7.89711 15.7095 8.12411 16.0685 8.17911L21.0385 8.90011C21.4585 8.96011 21.8095 9.25011 21.9485 9.65011C22.0795 10.0511 21.9665 10.4911 21.6585 10.7801L17.9185 14.3201Z" fill={fill}/>
</svg>

export const Catagory = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.53989 2H7.91989C9.32989 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32989 10.53 7.91989 10.53H4.53989C3.13989 10.53 1.99989 9.39 1.99989 7.97V4.561C1.99989 3.15 3.13989 2 4.53989 2ZM4.53989 13.4697H7.91989C9.32989 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32989 21.9997 7.91989 21.9997H4.53989C3.13989 21.9997 1.99989 20.8497 1.99989 19.4397V16.0307C1.99989 14.6107 3.13989 13.4697 4.53989 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z" fill={fill}/>
</svg>

export const Voters = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1583 8.23285C16.1583 10.5825 14.2851 12.4666 11.949 12.4666C9.61292 12.4666 7.73974 10.5825 7.73974 8.23285C7.73974 5.88227 9.61292 4 11.949 4C14.2851 4 16.1583 5.88227 16.1583 8.23285ZM11.949 20C8.51785 20 5.58809 19.456 5.58809 17.2802C5.58809 15.1034 8.49904 14.5396 11.949 14.5396C15.3802 14.5396 18.31 15.0836 18.31 17.2604C18.31 19.4362 15.399 20 11.949 20ZM17.9571 8.30922C17.9571 9.50703 17.5998 10.6229 16.973 11.5505C16.9086 11.646 16.9659 11.7748 17.0796 11.7946C17.2363 11.8216 17.3984 11.8369 17.5631 11.8414C19.2062 11.8846 20.6809 10.821 21.0883 9.21974C21.6918 6.84123 19.9198 4.7059 17.6634 4.7059C17.4181 4.7059 17.1835 4.73201 16.9551 4.77884C16.9238 4.78605 16.8907 4.80046 16.8728 4.82838C16.8513 4.8626 16.8674 4.90853 16.8889 4.93825C17.5667 5.8938 17.9571 7.05918 17.9571 8.30922ZM20.6782 13.5126C21.7823 13.7296 22.5084 14.1727 22.8093 14.8166C23.0636 15.3453 23.0636 15.9586 22.8093 16.4864C22.349 17.4851 20.8654 17.8058 20.2887 17.8886C20.1696 17.9066 20.0738 17.8031 20.0864 17.6833C20.3809 14.9157 18.0377 13.6035 17.4315 13.3018C17.4055 13.2883 17.4002 13.2676 17.4028 13.255C17.4046 13.246 17.4154 13.2316 17.4351 13.2289C18.7468 13.2046 20.1571 13.3847 20.6782 13.5126ZM6.43711 11.8413C6.60186 11.8368 6.76304 11.8224 6.92063 11.7945C7.03434 11.7747 7.09165 11.6459 7.02718 11.5504C6.4004 10.6228 6.04313 9.50694 6.04313 8.30913C6.04313 7.05909 6.43353 5.89371 7.11135 4.93816C7.13284 4.90844 7.14806 4.86251 7.12746 4.82829C7.10956 4.80127 7.07553 4.78596 7.04509 4.77875C6.81586 4.73192 6.58127 4.70581 6.33593 4.70581C4.07951 4.70581 2.30751 6.84114 2.91191 9.21965C3.31932 10.8209 4.79405 11.8845 6.43711 11.8413ZM6.59694 13.2545C6.59962 13.268 6.59425 13.2878 6.56918 13.3022C5.9621 13.6039 3.61883 14.9161 3.91342 17.6827C3.92595 17.8034 3.83104 17.9061 3.71195 17.889C3.13531 17.8061 1.65163 17.4855 1.19139 16.4867C0.936203 15.9581 0.936203 15.3457 1.19139 14.817C1.49225 14.1731 2.21752 13.73 3.32156 13.512C3.84358 13.385 5.25294 13.2049 6.5656 13.2292C6.5853 13.2319 6.59515 13.2464 6.59694 13.2545Z" fill={fill}/>
</svg>

export const Play = ({size,fill}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.0058C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0058C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0058ZM15.668 13.0178C15.7741 12.9117 15.9093 12.7477 15.9382 12.7091C16.0927 12.5065 16.1699 12.2557 16.1699 12.0058C16.1699 11.725 16.083 11.4645 15.9189 11.2523C15.9055 11.2388 15.8791 11.2102 15.8448 11.1728C15.7806 11.103 15.6885 11.0026 15.6004 10.9146C14.8089 10.0656 12.7432 8.67631 11.6622 8.25181C11.4981 8.18524 11.083 8.03956 10.861 8.02991C10.6486 8.02991 10.4459 8.07815 10.2529 8.17463C10.0116 8.3097 9.81853 8.52195 9.71236 8.77279C9.64479 8.94645 9.53861 9.46744 9.53861 9.47709C9.43243 10.0463 9.37452 10.9725 9.37452 11.9952C9.37452 12.9706 9.43243 13.8572 9.51931 14.4361C9.52169 14.4385 9.53 14.4799 9.5429 14.5442C9.58211 14.7397 9.6638 15.1471 9.75097 15.314C9.96332 15.7192 10.3784 15.9701 10.8224 15.9701H10.861C11.1506 15.9604 11.7587 15.7096 11.7587 15.7C12.7819 15.2754 14.7992 13.9537 15.61 13.0757L15.668 13.0178Z" fill={fill}/>
</svg>

export const Ticket2 = ( {size,fill}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.761 12.001C19.761 12.8145 20.429 13.4764 21.25 13.4764C21.664 13.4764 22 13.8093 22 14.2195V16.8958C22 19.159 20.142 21 17.858 21H6.143C3.859 21 2 19.159 2 16.8958V14.2195C2 13.8093 2.336 13.4764 2.75 13.4764C3.572 13.4764 4.24 12.8145 4.24 12.001C4.24 11.2083 3.599 10.6118 2.75 10.6118C2.551 10.6118 2.361 10.5335 2.22 10.3938C2.079 10.2541 2 10.0648 2 9.86866L2.002 7.10514C2.002 4.84201 3.86 3 6.144 3H17.856C20.14 3 21.999 4.84201 21.999 7.10514L22 9.78245C22 9.97864 21.921 10.1689 21.781 10.3076C21.64 10.4473 21.45 10.5256 21.25 10.5256C20.429 10.5256 19.761 11.1875 19.761 12.001ZM14.252 12.648L15.431 11.5105C15.636 11.3143 15.707 11.025 15.618 10.7575C15.53 10.4899 15.3 10.2997 15.022 10.261L13.393 10.0252L12.664 8.5627C12.539 8.31102 12.285 8.15446 12.002 8.15347H12C11.718 8.15347 11.464 8.31003 11.337 8.56171L10.608 10.0252L8.982 10.26C8.701 10.2997 8.471 10.4899 8.382 10.7575C8.294 11.025 8.365 11.3143 8.569 11.5105L9.748 12.648L9.47 14.2562C9.422 14.5336 9.535 14.8091 9.765 14.9746C9.895 15.0667 10.046 15.1143 10.199 15.1143C10.316 15.1143 10.434 15.0855 10.542 15.0291L12 14.2701L13.455 15.0271C13.707 15.1608 14.006 15.14 14.235 14.9736C14.466 14.8091 14.579 14.5336 14.531 14.2562L14.252 12.648Z"  fill={fill}/>
</svg>

//Toasts

export const DangerToast = ({ size,fill }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4773 4.44209L21.746 17.0572C21.906 17.4338 21.976 17.7399 21.996 18.058C22.036 18.8012 21.776 19.5236 21.2661 20.0795C20.7562 20.6334 20.0663 20.9604 19.3164 21H4.6789C4.36896 20.9812 4.05901 20.9108 3.76906 20.8018C2.3193 20.2172 1.61942 18.5723 2.20932 17.1464L9.52809 4.43317C9.77804 3.98628 10.158 3.60082 10.6279 3.35309C11.9877 2.59902 13.7174 3.09447 14.4773 4.44209ZM12.8675 12.7557C12.8675 13.2314 12.4776 13.6287 11.9977 13.6287C11.5178 13.6287 11.1178 13.2314 11.1178 12.7557V9.95248C11.1178 9.47585 11.5178 9.09039 11.9977 9.09039C12.4776 9.09039 12.8675 9.47585 12.8675 9.95248V12.7557ZM11.9977 17.0176C11.5178 17.0176 11.1178 16.6202 11.1178 16.1456C11.1178 15.669 11.5178 15.2726 11.9977 15.2726C12.4776 15.2726 12.8675 15.6601 12.8675 16.1347C12.8675 16.6202 12.4776 17.0176 11.9977 17.0176Z" fill={fill}/>
</svg>
