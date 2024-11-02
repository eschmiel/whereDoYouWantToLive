import {useState} from 'react';

export const CustomWidget = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={()=>setOpen(!open)}
                style={{marginRight: '100%'}}
            >
                Widget
            </button>
            { open &&
                <div 
                    style={{
                        backgroundColor: "white",
                        padding: "20px",
                        fontWeight: 'bold'
                    }}
                >
                    Custom React Widget!
                </div>
            }
        </div>
    );
}