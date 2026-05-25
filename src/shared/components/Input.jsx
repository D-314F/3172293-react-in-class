export default function Input({
    label,
    htmlFor, //Es para accesibilidad, la persona que tiene una discapacidad va a escuchar el texto que esta ahi con tab
    type = "text",
    ...props
}){

    return(
        <div className="w-80">
                {/*Label */}
            <label 
                htmlFor={htmlFor} //Los inputs utilizan htmlfor para la accesibiliadad (para las personas que tienen dispacacidades el texto que esta ahi se va a reproducir) 
                className="
                    block
                    text-caption
                    mb-1
                    text-secondary
                "
                >
                {label}
            </label>

                {/* Contenedor del input */}
                <div 

                    className="
                        relative
                        h-12
                        flex
                        items-center
                    "
                >
                {/* Area interactiva invisible (48px)*/}
                <div
                    className="
                        absolute
                         inset-0
                    "

                    onMouseDown={(e) => {
                        e.preventDefault();
                        //Mueve el foco al siguiente nodo hermano en el DOM
                        //nextSibling puede ser texto; si no es elemento valido,
                        e.currentTarget.nextSibling.focus();
                    }}
                />


                {/* Input visual */}
                <input
                    type={type}
                    className="
                        relative
                        w-full
                        h-10
                        rounded-md
                        border-black-950
                        px-4
                        text-body

                        focus:outline-none
                        focus:ring-2
                        focus:ring-ring
                        focus:ring-brand
                        "
                        {...props}
                    />
            </div>
        </div>
    );
}