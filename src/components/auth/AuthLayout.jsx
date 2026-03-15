const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {children}
    </div>
  );
};

export default AuthLayout;