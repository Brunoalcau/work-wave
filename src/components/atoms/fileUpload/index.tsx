import { UploadIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { fileToJSON } from "../../../helper/fileToJSON";

type FileUploadProps = {
  name: string;
  description?: string;
  label?: string;
  accept?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: unknown | undefined | any ) => void
}

export const FileUpload = ({name, accept = 'application/JSON', description, onChange, label, ...props}: FileUploadProps) => {
  const [file, setFile] = useState<string>()
  const handleChange = async function(e: React.ChangeEvent<HTMLInputElement>): Promise<void> {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      if(typeof onChange === 'function') {
        onChange(await fileToJSON(e.target.files[0]))
      }
      setFile(e.target.files[0]?.name);
    }
  };
  const inputRef = useRef(null);
  
  return (
      <div className="flex items-center justify-center w-full">
        <label htmlFor={name} className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadIcon className="text-white w-8 h-8 mb-4" />

                  <span className="mb-2 text-sm text-gray-500 dark:text-gray-400" data-testid="file-upload-file">{file}</span>

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-bold" data-testid="file-upload-label">{label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400" data-testid="file-upload-description">{description}</p>
            </div>
            <input data-testid="file-upload-input"  ref={inputRef} accept={accept} id={name} {...props} type="file" className="hidden"   onChange={handleChange} />
        </label>
    </div> 
  );
};