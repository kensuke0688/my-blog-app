import { posts } from '../../data/posts';

const ArticleList = () => {
    return (
        <div className="max-w-3xl mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">記事一覧</h1>
            <ul className="divide-y divide-gray-200">
                {posts.map(post => (
                    <li className="flex gap-6 py-6" key={post.id}>
                        <img
                            src={post.thumbnailUrl}
                            alt={`${post.title} thumbnail`}
                            className="w-48 h-32 object-cover flex-shrink-0"
                        />
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <time dateTime={post.createdAt}>
                                    {new Date(post.createdAt).toLocaleDateString('ja-JP')}
                                </time>
                                {post.categories.map(category => (
                                    <span
                                        key={category}
                                        className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <h2 className="font-bold text-lg text-gray-900">{post.title}</h2>
                            <div
                                className="text-gray-500 text-sm line-clamp-2"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleList;
