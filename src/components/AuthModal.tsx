import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SigninForm } from './auth/SigninForm';
import { SignupForm } from './auth/SignupForm';
import { ForgotPasswordForm } from './auth/ForgotPasswordForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialForm?: 'signin' | 'signup' | 'forgot';
}

type FormType = 'signin' | 'signup' | 'forgot';

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialForm = 'signin' 
}) => {
  const [currentForm, setCurrentForm] = useState<FormType>(initialForm);

  useEffect(() => {
    setCurrentForm(initialForm);
  }, [initialForm, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setCurrentForm('signin');
    onClose();
  };

  const renderCurrentForm = () => {
    switch (currentForm) {
      case 'signin':
        return (
          <SigninForm
            onSwitchToSignup={() => setCurrentForm('signup')}
            onSwitchToForgotPassword={() => setCurrentForm('forgot')}
            onClose={handleClose}
          />
        );
      case 'signup':
        return (
          <SignupForm
            onSwitchToSignin={() => setCurrentForm('signin')}
            onClose={handleClose}
          />
        );
      case 'forgot':
        return (
          <ForgotPasswordForm
            onSwitchToSignin={() => setCurrentForm('signin')}
            onClose={handleClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <div className="w-6" /> {/* Spacer */}
            <div className="text-center">
              <h1 className="text-lg font-semibold text-white">NUTEC</h1>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {renderCurrentForm()}
          </div>
        </div>
      </div>
    </div>
  );
};
