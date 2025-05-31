import React, {useState} from 'react';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from '@/common/components/@radix-ui/dialog';
import {Button} from '@/common/components/@radix-ui/button';
import {Checkbox} from '@/common/components/@radix-ui/checkbox';
import {Input} from '@/common/components/@radix-ui/input';
import {FcGoogle} from 'react-icons/fc';
import {FaApple} from 'react-icons/fa';
import {AtSign, Lock} from 'lucide-react';

type LoginPanelProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({open, onOpenChange}: LoginPanelProps) => {
    const [rememberCheck, setRememberCheck] = useState<boolean>(false);
    const [loginData, setLoginData] = useState<Record<'email' | 'password', string>>({
        'email': '',
        'password': ''
    });

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='sm:max-w-sm flex flex-col'>
                <DialogHeader className='mb-2'>
                    <DialogTitle className='flex items-center text-xl'>Welcome back</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col items-stretch justify-between flex-1 gap-4'>
                    <div>
                        <div className='mb-2'>Email</div>
                        <div className='block relative'>
                            <AtSign className='absolute left-2.5 top-3 h-4 w-4' />
                            <Input
                                type='email'
                                placeholder='Enter your Email'
                                className='text-sm pl-8 bg-muted/50 border-0'
                                value={loginData.email}
                                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='mb-2'>Password</div>
                        <div className='block relative'>
                            <Lock className='absolute left-2.5 top-3 h-4 w-4' />
                            <Input
                                type='password'
                                placeholder='Enter your Password'
                                className='text-sm pl-8 bg-muted/50 border-0'
                                value={loginData.password}
                                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-2'>
                        <Checkbox
                            id={`id`}
                            checked={rememberCheck}
                            onCheckedChange={() => setRememberCheck(!rememberCheck)}
                        />
                        <span
                            className='flex-1 text-sm cursor-pointer select-none'
                            onClick={() => setRememberCheck(!rememberCheck)}>
                            Remember me
                        </span>
                        <a href='#' className='text-sm hover:game-text-primary'>Forgot password?</a>
                    </div>
                    <Button variant='secondary' className='mt-4 p-6'> Sign In</Button>
                    <div className='flex items-center justify-center gap-2 mt-2'>
                        <span className='text-sm'>Don't have an account?</span>
                        <a href='#' className='text-sm font-bold text-primary hover:underline'>Sign Up</a>
                    </div>
                    <div className='flex items-center justify-center m-2'>
                        <span className='text-sm'>Or With</span>
                    </div>
                </div>
                <DialogFooter className='flex flex-row justify-center sm:items-center sm:justify-center sm:gap-2 gap-4'>
                    <Button variant='outline' className='p-6'>
                        <FcGoogle /> Google
                    </Button>
                    <Button variant='outline' className='p-6'>
                        <FaApple /> Apple
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default LoginPanel;