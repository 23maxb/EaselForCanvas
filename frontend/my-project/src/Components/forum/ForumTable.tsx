import Link from 'next/link';

interface ForumTopicProps {
    name: string;
    description: string;
    topicsCount: number;
    repliesCount: number;
    viewsCount: number;
    lastPost: string;
}

const ForumTopic: React.FC<ForumTopicProps> = ({
                                                   name,
                                                   description,
                                                   topicsCount,
                                                   repliesCount,
                                                   viewsCount,
                                                   lastPost
                                               }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-3">
                    <Link href={`/forum/${name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <a className="font-medium text-gray-900 hover:underline">{name}</a>
                    </Link>
                    <span
                        className="text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-1">Topics: {topicsCount}</span>
                </div>
                <p className="text-sm text-gray-500">{description}</p>
            </td>
            <td className="px-6 py-4 text-right">
                <span className="text-sm text-gray-900">{repliesCount}</span>
            </td>
            <td className="px-6 py-4 text-right">
                <span className="text-sm text-gray-900">{viewsCount}</span>
            </td>
            <td className="px-6 py-4 text-right">
                <span className="text-sm text-gray-900">{lastPost}</span>
            </td>
        </tr>
    );
};
