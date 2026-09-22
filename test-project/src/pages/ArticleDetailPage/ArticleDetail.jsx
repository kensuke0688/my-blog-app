import { useParams,Link } from "react-router-dom";
import { posts } from '../../data/posts';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = posts.find(post => post.id === parseInt(id));
    console.log(article);
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col">
                        <img
                            src={article.thumbnailUrl}
                            alt={`${article.title} thumbnail`}
                  className="w-full h-96 pt-6 object-cover flex-shrink-0"
                        />
                        <div className="flex flex-col pt-6">
                            <div className="flex items-center gap-2 pb-4 text-base text-gray-500">
                                <time dateTime={article.createdAt}>
                                    {new Date(article.createdAt).toLocaleDateString('ja-JP')}
                                </time>
                                {article.categories.map(category => (
                                    <span
                                        key={category}
                                        className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <h2 className="font-bold text-2xl text-gray-900">{article.title}</h2>
                            <div
                                className="text-gray-500 text-base pt-6"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />
                  </div>
        
      </div>
      <Link to="/" className="text-blue-500  hover:underline">記事一覧に戻る</Link>
    </div>
    
  );
}
export default ArticleDetail;