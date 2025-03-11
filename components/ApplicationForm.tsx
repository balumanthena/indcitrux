"use client";

import React from 'react';
import { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
    file: File | null;
  }>({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus('Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          file: null,
        });
      } else {
        const errorData = await response.json();
        setStatus(errorData.message || 'Failed to submit application');
      }
    } catch (error) {
      setStatus('Failed to submit application');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
      encType="multipart/form-data"
    >
      <div>
        <label className="block text-white mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-2">Upload Resume</label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          accept=".pdf,.doc,.docx"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Submit
      </button>
      {status && (
        <div
          className={`mt-4 p-4 ${
            status.includes('success') ? 'bg-green-600' : 'bg-red-600'
          } text-white rounded-md`}
        >
          {status}
        </div>
      )}
    </form>
  );
};

export default ApplicationForm;
