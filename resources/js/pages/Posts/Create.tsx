import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Posts',
        href: '/posts/create',
    },
];


export default function CreatePost() {
    const {data, setData, errors, post, reset, processing} = useForm({
        title: '',
        content: ''
    });


    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/posts', {
            onSuccess: ()=>{
                reset();
            },
        })
    }


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Post" />
            <div className="container ms-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Create New Post</h1>
                    <Link
                        href="/posts"
                        className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded shadow"
                    >
                        Back to Posts
                    </Link>
                </div>

                <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 max-w-2xl">
                    <form onSubmit={submit} method="POST" className="space-y-6">
                        {/* CSRF Token */}
                        <input type="hidden" name="_token" value={(window as any).csrfToken} />
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id = "title"
                                value={data.title}
                                onChange={(e) => setData('title', e.currentTarget.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-500 dark:bg-neutral-700 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Content
                            </label>
                            <textarea
                                name="content"
                                rows={6}
                                value={data.content}
                                onChange={(e) => setData('content', e.currentTarget.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-500 dark:bg-neutral-700 dark:text-white"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className=" cursor-pointer bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
                            >
                                {processing ? 'Creating...' : 'Create Post'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
