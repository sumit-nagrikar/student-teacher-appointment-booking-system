import React from 'react';
import student from '../../public/assets/students.jpg';
import teacher from '../../public/assets/teachers.jpg';
import admin from '../../public/assets/admin.jpg';
import HomeCard from '../components/Cards/HomeCard';

function Home() {
  return (
    <>
      <div className="flex flex-col gap-12 items-center px-6 py-4 min-h-screen justify-center dark:bg-zinc-400 dark:text-white">
        <h1 className="font-bold text-3xl text-center">
          Scheduling Success, One Session at a Time
        </h1>
        <div className="sm:flex">
          <HomeCard img={student} name="student" />
          <HomeCard img={teacher} name="teacher" />
          <HomeCard img={admin} name="admin" />
        </div>
      </div>
    </>
  );
}

export default Home;