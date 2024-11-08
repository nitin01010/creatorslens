import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';
import { toast } from 'react-toastify';

const ModalComponents = ({ data }) => {
    const [open, setOpen] = useState(data);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const onOpenModal = () => setOpen(true);

    const onCloseModal = () => {
        setOpen(false);
        setError('');
    };

    const handleSubmit = async () => {
        if (!name || !email) {
            setError('Both fields are required.');
            return;
        }

        try {
            const response = await axios.post(`https://creatorslensbackend-production.up.railway.app/api/v1/ai/message`, { name, email });
            toast.success(`Thank you, ${name}! We've received your details.`);
            onCloseModal();
        } catch (err) {
            toast.error("Oops! Something went wrong. Please try again.");
            setError('Failed to send data. Please try again.');
        }
    };

    return (
        <Modal open={ open } onClose={ onCloseModal } center>
            <h1 className='text-2xl font-bold text-center py-5'>🎉 Get Early Access!</h1>
            <p className='text-center text-black py-10'>Be one of the first to experience our new features and provide valuable feedback! By joining early access, you’ll help shape the future of our platform. Spaces are limited, so don’t miss out!</p>

            { error && <p className="text-red-500 text-center mb-4">{ error }</p> }

            <input
                type="text"
                placeholder='Enter your Name'
                value={ name }
                onChange={ (e) => setName(e.target.value) }
                className='font-semibold py-4 p-2 border-2 border-blue-400 px-4 text-lg outline-none rounded-[10px] shadow-lg bg-white w-full'
            />
            <input
                type="email"
                placeholder='Enter your email'
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                className='font-semibold py-4 p-2 mt-6 border-2 border-blue-400 px-4 text-lg outline-none rounded-[10px] shadow-lg bg-white w-full'
            />
            <button
                onClick={ handleSubmit }
                className='py-3 p-2 mt-4 rounded-[10px] text-white text-lg bg-blue-500 w-full'
            >
                Send
            </button>
        </Modal>
    );
};

export default ModalComponents;
