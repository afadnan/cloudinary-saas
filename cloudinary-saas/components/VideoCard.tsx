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

const VideoCard:React.FC<VideoCardProps> = ({ video ,onDownload}) => {
  const [isHovered,setIsHovered] = useState(false);
  const [previewError,setPreviewError] = useState(false);

  const getThembnaiUrl = useCallback((publicId:string)=> {
    return getCldImageUrl({
      src:publicId,
      width:400,                                                                           
      height:255,
      crop:'fill',
      gravity:'auto',
      format:'jpg',
      quality:'auto',
      assetType:'video'
    })        
  },[])

  const getFullVideoUrl = useCallback((publicId:string)=> {
    return getCldVideoUrl({
      src:publicId,
      width:1920,                                                                           
      height:1080,
    }) 
  },[])
  
  const getPreviweVideoUrl = useCallback((publicId:string)=> {
    return getCldVideoUrl({
      src:publicId,
      width:400,                                                                           
      height:255,
      rawTransformations:["e_preview: duration_15: max_seq_9:min_seq_dur_1"]
    }) 
  },[])
  
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard;