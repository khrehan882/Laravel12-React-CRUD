import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];
type Post = {
    id: number;
    title: string;
    content: string;
    created_at: string;
};

interface PostsProps {
    posts: Post[];
}
export default function Posts({ posts }: PostsProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className='container ms-auto p-4'>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-2xl font-bold'>Blog Posts</h1>
                    <Link href='/posts/create' className='bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600'>
                        Create Post
                    </Link>
                </div>
                <div className='overflow-x-auto'>
                    <table className='w-full table-auto shadow-lg bg-white dark:bg-neutral-800 rounded-lg'>
                        <thead>
                            <tr className='bg-neutral-50 dark:bg-neutral-700'>
                                <th className='p-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300'>ID</th>
                                <th className='p-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300'>Tittle</th>
                                <th className='p-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300'>Content</th>
                                <th className='p-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300'>Created_At</th>
                                <th className='p-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300'>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id} className='border-b dark:border-neutral-700'>
                                    <td className='p-4 text-sm text-gray-500 dark:text-gray-300'>{post.id}</td>
                                    <td className='p-4 text-sm text-gray-500 dark:text-gray-300'>{post.title}</td>
                                    <td className='p-4 text-sm text-gray-500 dark:text-gray-300'>{post.content}</td>
                                    <td className='p-4 text-sm text-gray-500 dark:text-gray-300'>{post.created_at}</td>
                                    <td className="p-4 text-sm text-gray-700 dark:text-gray-300">
                                        <div className="flex gap-3">
                                            <Link
                                                href={`/posts/${post.id}/edit`}
                                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1.5 rounded-md shadow-md transition duration-200"
                                            >
                                                Edit
                                            </Link>

                                            <Link
                                                method="delete"
                                                as="button"
                                                onClick={(e) => {
                                                    if (!confirm('Are you sure you want to delete this post?')) {
                                                        e.preventDefault();

                                                    }
                                                }
                                                }
                                                href = {`/posts/${post.id}`}
                                                className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-1.5 rounded-md shadow-md transition duration-200"
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </AppLayout>
    );
}
