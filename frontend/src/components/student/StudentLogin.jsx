import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { axiosClient } from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { STUDENT_DASHBOARD_ROUTE } from '../../router';
import { Loader } from 'lucide-react';

const formSchema = z.object({
  email: z.string().min(2).max(30).email(),
  password: z.string().min(8).max(30),
});

const StudentLogin = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'hassan@gmail.com',
      password: '12345678',
    },
  });

  const {
    setError,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
    await axiosClient.get('/sanctum/csrf-cookie', {
      baseURL: import.meta.env.VITE_BACKEND_URL,
    });
    const data = axiosClient
      .post('/login', values)
      .then((value) => {
        if (value.status === 204) {
          window.localStorage.setItem('ACCESS_TOKEN', 'test');
          navigate(STUDENT_DASHBOARD_ROUTE);
        }
      })
      .catch(({ response }) => {
        setError('email', {
          message: response.data.errors.email,
        });
      });
  };
  return (
    <div className="flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your email"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Your password"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isSubmitting}
            type="submit"
            className="mt-4 w-full text-white font-semibold py-2 px-4 rounded-xl transition-all"
          >
            {isSubmitting && <Loader className="mx-2 my-2 animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default StudentLogin;
