import React,{useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

const VideoUpload = () => {
const [file,setFile] = useState<File | null>(null)
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [isUploading,setIsUploading] = useState(false)

const route = useRouter()


  return (
    <div>VideoUpload</div>
  )
}

export default VideoUpload