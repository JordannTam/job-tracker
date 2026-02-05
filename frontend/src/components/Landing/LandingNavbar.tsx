import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

/**
 * Transparent navbar for landing page.
 * Logo on left, Sign In button on right.
 */
export const LandingNavbar = (): JSX.Element => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-brand-dark hover:text-brand transition-colors">
            JobFlow
          </Link>

          {/* Sign In */}
          <Link to="/applications">
            <Button
              variant="ghost"
              size="sm"
              className="text-brand-body hover:text-brand hover:bg-white/50 cursor-pointer"
            >
              Sign In
            </Button>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};
