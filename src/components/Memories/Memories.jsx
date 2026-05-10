import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon, Heart } from 'lucide-react';
import './Memories.css';

const MemoryUpload = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setImages(prev => [...prev, ...newImages]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true
  });

  const removeImage = (index) => {
    const updatedImages = [...images];
    URL.revokeObjectURL(updatedImages[index].preview);
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <section id="memories" className="memories-simple">
      <div className="container">
        <div className="section-header-simple">
          <h2 className="section-title-simple">Childhood <span className="text-gradient">Memories</span></h2>
          <p className="section-subtitle-simple">A small space to keep the moments that shaped our lives. Upload your favorite childhood memories with your mother.</p>
        </div>

        <div className="upload-box-simple">
          <div {...getRootProps()} className={`dropzone-simple ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            <div className="dropzone-content-simple">
              <Upload size={24} className="upload-icon-simple" />
              <h3>Choose a Memory</h3>
              <p>Drag & drop or click to upload</p>
            </div>
          </div>
        </div>

        <div className="memory-grid-simple">
          <AnimatePresence>
            {images.map((file, index) => (
              <motion.div
                key={file.preview}
                className="memory-item-simple"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
              >
                <div className="image-container-simple">
                  <img src={file.preview} alt="Memory" />
                  <button className="remove-btn-simple" onClick={() => removeImage(index)}>
                    <X size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MemoryUpload;
