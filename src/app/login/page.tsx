"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    workspace: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Clean and validate workspace name
    const workspace = formData.workspace.toLowerCase().trim();

    if (workspace) {
      // Only allow "magnetic" as valid workspace
      if (workspace === "magnetic") {
        const workspaceUrl = `https://${workspace}.roboanywhere.com`;
        window.location.href = workspaceUrl;
      } else {
        setIsSubmitting(false);
        setError("Workspace not found.");
      }
    } else {
      setIsSubmitting(false);
      setError("Please enter a valid workspace name.");
    }
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-2">
              Access Your Workspace
            </h2>
            <p className="text-text-secondary">
              Enter your workspace to continue to RoboAnywhere
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="workspace"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Workspace
              </label>
              <input
                id="workspace"
                name="workspace"
                type="text"
                required
                value={formData.workspace}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-black"
                placeholder="Enter your workspace name."
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-cta disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center py-3"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Connecting...
                </>
              ) : (
                "Go To App"
              )}
            </button>

            <div className="text-center">
              <p className="text-text-secondary">
                Don&apos;t have a workspace?{" "}
                <Link
                  href="/demo"
                  className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                >
                  Request a demo
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="text-center text-sm text-text-secondary">
          <p>
            By accessing your workspace, you agree to our{" "}
            <a href="/terms" className="text-primary-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
