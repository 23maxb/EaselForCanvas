import {NextApiRequest, NextApiResponse} from 'next';
import clientPromise from '../../lib/mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Connect to the MongoDB cluster
        const client = await clientPromise;
        const db = client.db('forumDB');  // Use the correct database name

        // Fetch data from the 'topics' collection
        const topics = await db.collection('topics').find({}).toArray();

        // Return the topics as JSON
        res.status(200).json({success: true, topics});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: 'Error fetching forum topics'});
    }
}
