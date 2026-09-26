import { useState } from 'react';

const initialFormData = {
    name: '',
    email: '',
    message: '',
};

const initialErrors = {
    name: '',
    email: '',
    message: '',
};

const Contact = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }
        
        setIsSubmitting(true);

        await fetch('https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        setIsSubmitting(false);
        handleClear();
        alert('送信しました');
    };

    const handleClear = () => {
        setFormData(initialFormData);
        setErrors(initialErrors);
    };

    const validate = () => {
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name) {
            newErrors.name = 'お名前は必須です。';
        } else if (formData.name.length > 30) {
            newErrors.name = '名前は30文字以内で入力してください。';
        }

        if (!formData.email) {
            newErrors.email = 'メールアドレスは必須です。';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = '有効なメールアドレスを入力してください。';
        }

        if (!formData.message) {
            newErrors.message = '本文は必須です。';
        } else if (formData.message.length > 500) {
            newErrors.message = 'メッセージは500文字以内で入力してください。';
        }

        setErrors(newErrors);
        return Object.values(newErrors).every(error => error === '');
    };

    return (
        <div className="max-w-3xl mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">問合わせフォーム</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-[160px_1fr] items-start gap-4">
                    <label htmlFor="name" className="pt-2 text-sm font-medium text-gray-700">お名前</label>
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            disabled={isSubmitting}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-[160px_1fr] items-start gap-4">
                    <label htmlFor="email" className="pt-2 text-sm font-medium text-gray-700">メールアドレス</label>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            disabled={isSubmitting}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-[160px_1fr] items-start gap-4">
                    <label htmlFor="message" className="pt-2 text-sm font-medium text-gray-700">本文</label>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            rows="8"
                            disabled={isSubmitting}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-[160px_1fr] gap-4">
                    <div />
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            送信
                        </button>
                        <button
                            type="button"
                            onClick={handleClear}
                            disabled={isSubmitting}
                            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                        >
                            クリア
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
