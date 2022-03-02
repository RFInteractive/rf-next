import nc from 'next-connect';
import sendgrid from '@sendgrid/mail';

const handler = nc();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

handler.post(async (req, res) => {
    try {
        const data = req.body;
        let msg = {
            personalizations: [
                {
                    to: 'dev@rankfuse.com',
                },
            ],
            from: 'dev@rankfuse.com',
            reply_to: 'dev@rankfuse.com',
            templateId: 'd-25c3336d78b34c089130dfcd6c791a26',
            dynamic_template_data: {
                data,
            },
        };
        await sendgrid.send(msg);
        res.json({ message: 'message received' });
    } catch (error) {
        res.status(500).end('Something went awry with SendGrid');
        console.log(error.response.body);
    }
});

export default handler;
