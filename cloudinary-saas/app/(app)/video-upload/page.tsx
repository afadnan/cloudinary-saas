import React,{useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'
import { toast } from 'react-toastify';

const VideoUpload = () => {
const [file,setFile] = useState<File | null>(null)
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [isUploading,setIsUploading] = useState(false)

const route = useRouter()
//max file size of 100mb

const MAX_FILE_SIZE = 100 * 1024 *1024

const handleSubmit = async (e:React.FormEvent) => {
  e.preventDefault()
  if(!file) return ;

  if (file.size > MAX_FILE_SIZE) {
    //add notification
    toast.error('File size exceeds the maximum allowed size of 100MB.');
    return;
  }

  setIsUploading(true)
  const formData = new FormData();
  formData.append('file',file);
  formData.append('title',title);
  formData.append('description',description);
  formData.append('originalSize',file.size.toString());

}



  return (
    <div>VideoUpload</div>
  )
}

export default VideoUpload