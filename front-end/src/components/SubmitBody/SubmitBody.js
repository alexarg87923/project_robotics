import React from 'react';
import { Wrapper } from './SubmitBodyStyles';
import { useDropzone } from 'react-dropzone';
import Flex from '../Flex/Flex';
import cloudUpload from './cloud-upload.svg';

function SubmitBody() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Wrapper>
      <div className="container">
        <div {...getRootProps({ className: 'dropzone-area py-5' })}>
          <input {...getInputProps()} />
          <Flex justifyContent="center">
            <img src={cloudUpload} alt="" width={25} className="me-2" />
            <p className="fs-0 mb-0 text-gray">Drop your files here</p>
          </Flex>
        </div>
        <div className="mt-3">
          {acceptedFiles.length > 0 && (
            <>
              <h6>Files</h6>
              <ul>{files}</ul>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default SubmitBody;
