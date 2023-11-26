
import Layout from '../../Layout/Layout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styles from './login.module.scss';


const LoginScreen: React.FC = () => {
    const { data: session } = useSession();

    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || '/');
        }
    }, [router, session, redirect]);

    const { handleSubmit, register, formState: { errors } } = useForm();
    const submitHandler = async ({ email, password }: { email: string; password: string }) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });
            if (result.error) {
                toast.error(result.error);
            }
        } catch (err) {
            toast.error(getError(err));
        }
    };


    return (
        <Layout title="Login">
            <form
                className={styles['login-form']}
                onSubmit={handleSubmit(submitHandler)}
            >
                <h1>Login</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Please enter email',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                message: 'Please enter a valid email',
                            },
                        })}
                        id="email"
                        autoFocus
                    ></input>
                    {errors.email && (
                        <div>{errors.email.message}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Please enter a password',
                            minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                        })}
                        id="password"
                        autoFocus
                    ></input>
                    {errors.password && (
                        <div>{errors.password.message}</div>
                    )}
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div>
                    Don&apos;t have an account? &nbsp;
                    <Link href="/register">Register</Link>
                </div>
            </form>
        </Layout>
    );
};

export default LoginScreen;
