import SAD from '/src/assets/img/sad.svg';

const FailedPage = () => {
  return (
    <div className="flex justify-center  min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold text-red-600">Maaf!</h1>
      <p className="text-xl my-5">Gagal Memuat Data...</p>
      <img src={SAD} alt="error page" className="w-[25rem]" />
    </div>
  );
};

export default FailedPage;
