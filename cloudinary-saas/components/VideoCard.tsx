import React,{useState,useEffect,useCallback} from 'react'
import {getCldImageUrl,getCldVideoUrl} from "next-cloudinary";
import { Download,Clock,FileDown,FileUp } from 'lucide-react';
import dayjs from 'dayjs';
import realtiveTime from 'dayjs/plugin/relativeTime';
import {filesize} from 'filesize';

dayjs.extend(realtiveTime)

interface VideoCardProps {
  onDownload : (url:string,title:string)=> void;
}

const VideoCard = () => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard;