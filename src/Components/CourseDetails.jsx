import React from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  kidsCourses,
  teensCourses,
  adultsCourses,
  defaultCourses,
} from "../Pages/Features";
import Header from '../Components/Header'
import { color } from "framer-motion";
import { SubjectService } from "../services/subject.service";
import { useState, useEffect, useMemo } from "react";
import { DiscussionEmbed } from 'disqus-react';
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const detailStyles = {  
  kids: {
    bgColor: "bg-gradient-to-b from-[#004aad] to-[#5de0e6]",
    bgcontent:"bg-white/90",
    bgTemario:"bg-black/20",
    title: "text-pink-500 text-3xl font-bold font-bubblegum",
    description:"text-yellow-400 font-bubblegum text-xl",
    font:"font-bubblegum text-base",
    textColor: "text-blue-800",
    buttonColor: "bg-green-500",
  },
  young: {
    bgColor: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
    bgcontent:"bg-black/70",
    bgTemario:"bg-black/30",
    title: "text-yellow-300 text-2xl font-arcade",
    description:"text-green-400 font-arcade text-xs",
    font:"font-arcade text-xs",
    color:"text-green-500",
    buttonColor: "bg-yellow-500",
  },
  adult: {
    bgColor: "bg-gradient-to-b from-[#0b583b] to-[#000]",
    bgcontent:"bg-black/30",
    bgTemario:"bg-gray-900/60",
    title: "text-white text-3xl font-bree font-bold",
    description:"text-green-400 font-bree text-md",
    font:"font-bree text-sm",
    color:"text-green-500",
    buttonColor: "bg-yellow-500",
  },
  default: {
    bgColor: "bg-gradient-to-b from-[#ea6558] to-[#7c2d12]",
    textColor: "text-white",
    buttonColor: "bg-blue-500",
  },
};

const CourseDetails = ({ courses }) => {
  const subjectService = new SubjectService();
  const { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";
  const [subject, setSubject] = useState([]);
  const [sections, setSections] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const styles = detailStyles[variant] || detailStyles.default;

  const disqusConfig = useMemo(() => ({ 
    identifier: id, 
    title: subject?.title || 'Course Discussion',
    language: 'es_ES',
  }), [id, subject?.title]); 

  const loadSubject = async () => {
    try {
      const response = await subjectService.getSubjectById(id);
      setSubject(response);
    } catch (error) {
      console.error('Error loading subject:', error);
      setSubject(null);
    }
  };

  const loadSections = async () => {
    try {
      const response = await subjectService.getSessionsBySubjectId(id);
      setSections(response);
  
      // Establecer el primer video directamente desde la respuesta
      if (response.length > 0 && response[0].sessions.length > 0) {
        const firstVideoId = extractYouTubeId(response[0].sessions[0].video);
        setCurrentVideoId(firstVideoId);
      }
    } catch (error) {
      console.error("Error loading sections:", error);
      setSections([]);
    }
  };

  const extractYouTubeId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
    return match ? match[1] : '';
  };

  const handleVideoChange = (videoUrl) => {
    const videoId = extractYouTubeId(videoUrl);
    setCurrentVideoId(videoId);
  };


  const filteredCourses =
    variant === "kids"
      ? kidsCourses
      : variant === "young"
      ? teensCourses
      : variant === "adult"
      ? adultsCourses
      : defaultCourses;

  
  useEffect(() => {
    loadSections();
  }, [id]);

  useEffect(() => {
    loadSubject();
  }, [id]);

  
  if (!subject || !sections) {
    return <div className={`text-center text-red-500 ${styles.bgColor} h-screen`}>Curso no encontrado.</div>;
  }

 
  return (
    <>
    <div className={`min-h-screen  ${styles.bgColor} p-8`}> 
    <Header variant={variant}/> 
      <div className={`${styles.bgcontent } max-w-7xl mx-auto rounded-lg shadow-lg p-6`}>
        {/* Imagen ocupando dos columnas */}
        <div className="relative h-60 w-full bg-cover bg-center rounded-lg mb-6">
          <img
            src={subject.banner}
            alt={subject.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
        </div>

        {/* Contenido principal: Video y descripción a la izquierda, contenido del curso a la derecha */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Columna izquierda: Video y descripción */}
          <div className="flex-1">
          <div className="video-player">
        <Plyr
          source={{
            type: 'video',
            sources: [
              {
                src: currentVideoId,
                provider: 'youtube',
              },
            ],
          }}
        />
      </div>
         {/* Descripción */}
         <div className="mb-6">
            <h2 className={`${styles.title} mb-2 `}>{subject.title}</h2>
            <p className={`${styles.description}`}>{subject.description}</p>
          </div>
          
            {/* Información del curso */}
          <div className={`${styles.font} flex flex-wrap items-center bg-gray-100 rounded-lg p-4 mb-6 shadow-md `}>
            <div className="flex items-center space-x-2 text-gray-700 mr-8">
              <span>🎥</span>
              <p >Horas de video: {subject.hours || 10}</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 mr-8">
              <span>⭐</span>
              <p>Puntuación: {subject.rate }</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 mr-8">
              <span>📈</span>
              <p>Dificultad: {subject.level}</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <span>💵</span>
              <p>Precio: ${subject.price}</p>
            </div>
          </div>
          {subject && (
            <DiscussionEmbed
              shortname='skillfront'
              config={disqusConfig}
            />
          )}
          </div>

          {/* Columna derecha: Contenido del curso */}
          <div className= {`${styles.bgTemario} w-full md:w-1/3 rounded-lg shadow-lg p-6`}>
            <h2 className={`${styles.title} text-md `}>
              Contenido del curso
            </h2>
            <ul className="space-y-2">
               {sections.map((section) => (
                <li
                  className={`p-2 bg-gray-100 rounded shadow flex flex-col ${styles.description}`}
                >
                  {section.title}
                  {section.sessions.map((session) => (
                      <button 
                      onClick={() => handleVideoChange(session.video)}
                      className="bg-black text-white m-1 hover:bg-gray-800">{session.title}</button>
                  ))}
                </li>
              ))} 
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseDetails;
