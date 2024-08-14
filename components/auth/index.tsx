import Button from "../ui/button"
import { FaGoogle } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Auth() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 items-center h-screen">
            <img src="/images/x.svg" alt="x" width={450} height={450} className="justify-self-end"/>
            <div className="flex flex-col justify-between h-[70vh]">
                <h1 className="text-6xl font-bold">Happening now</h1>
                <div className="w-[60%]">
                    <h2 className="font-bold text-3xl mb-4">Join today.</h2>
                    <div className="flex flex-col space-y-2">
                        <Button label={ <div className="flex gap-2 items-center justify-center"> <FaGoogle className="text-lg"/> Sigun with google </div>} fullWidth secondary/>
                        <Button label={ <div className="flex gap-2 items-center justify-center"> <AiFillGithub className="text-lg"/> Sigun with google </div>}  fullWidth secondary/>

                       <div className="flex items-center justify-center">
                        <div className="h-px bg-gray-700 w-1/2"></div>
                         <p className="mx-4">or</p>
                        <div className="h-px bg-gray-700 w-1/2"></div>
                       </div>
                        <button>Create account</button>
                    </div>
                </div>
                <div className="w-[60%]">
                    <h3 className="font-medium text-xl mb-4">Already have an account?</h3>
                    <button>Signin</button>
                </div>

            </div>

        </div>
    </>
  )
}

export default Auth