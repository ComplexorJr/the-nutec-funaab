import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ArrowLeft, Mail } from 'lucide-react';

interface ForgotPasswordFormProps {
  onSwitchToSignin: () => void;
  onClose: () => void;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ 
  onSwitchToSignin, 
  onClose 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle password reset logic here
      console.log('Password reset requested for:', email);
      setIsSubmitted(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Check Your Email</h2>
          <p className="text-gray-300 mb-4">
            We've sent password reset instructions to
          </p>
          <p className="text-blue-400 font-semibold mb-6">{email}</p>
          <p className="text-sm text-gray-400">
            Didn't receive the email? Check your spam folder or try again.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="w-full border-gray-600 text-white hover:bg-gray-800"
          >
            Try Different Email
          </Button>
          
          <button
            onClick={onSwitchToSignin}
            className="w-full text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
        <p className="text-gray-300">
          Enter your email and we'll send you instructions to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          Send Reset Instructions
        </Button>
      </form>

      <div className="text-center">
        <button
          onClick={onSwitchToSignin}
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeft size={16} />
          Back to Sign In
        </button>
      </div>
    </div>
  );
};
