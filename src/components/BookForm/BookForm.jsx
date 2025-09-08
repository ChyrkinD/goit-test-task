import { useState } from 'react';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import Button from '../Button/Button.jsx';

import 'react-datepicker/dist/react-datepicker.css';

const initialState = {
  name: '',
  email: '',
  bookingDate: undefined,
  comment: '',
};

const BookForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = date => {
    setFormData(prev => ({ ...prev, bookingDate: date }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.bookingDate) {
      toast.error('Not all required fields are filled in');
      return;
    }

    toast.success('Your booking request has been sent successfully!');
    setFormData(initialState);
  };

  return (
    <div className="py-11 px-[57px] border border-gray-light rounded-xl">
      <h3 className="font-semibold text-xl mb-2">Book your campervan now</h3>
      <p className="text-gray mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          className="bg-inputs h-[60px] p-[18px] rounded-xl outline-none w-full !mb-[14px]"
          type="text"
          name="name"
          placeholder="Name*"
          required
          value={formData.name}
          onChange={handleInputChange}
        />

        <input
          className="bg-inputs h-[60px] p-[18px] rounded-xl outline-none w-full !mb-[14px]"
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={handleInputChange}
        />

        <DatePicker
          selected={formData.bookingDate}
          onChange={handleDateChange}
          showMonthYearDropdown={false}
          placeholderText="Booking date*"
          required={true}
          wrapperClassName="w-full mb-[14px]"
          className="bg-inputs h-[60px] p-[18px] rounded-xl outline-none w-full"
        />

        <textarea
          className="bg-inputs h-[118px] p-[18px] rounded-xl outline-none w-full !mb-6 resize-none"
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          label="Send"
          className="w-[166px] block !m-auto"
        />
      </form>
    </div>
  );
};

export default BookForm;
