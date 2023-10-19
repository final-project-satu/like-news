import ERROR from '/src/assets/img/error.svg';

const ErrorPage = () => {
  return (
    <div className="flex justify-center  min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold text-red-600">Oops!</h1>
      <p className="text-xl my-5">Halaman yang kamu cari tidak ditemukan</p>
      <img src={ERROR} alt="error page" className="w-[25rem]" />
    </div>
  );
};

export default ErrorPage;
