// Componenete Select 

export default function Select({
    label,
    error,
    htmlFor,
    name,
    options = [],
    value,
    onChange,
})
{
    return (
        <div>
            {/* Label solo se muestra si es Truth un uno logico */}

            {label &&( //significa una comparacion binaria si label existe entonces se renderiza el label, si no no se renderiza nada
           <label
                htmlFor={htmlFor}
                className={`
                    block
                    text-caption
                    ${error ? "text-red-600" : "text-secondary"}
                `}
            >
                {label}
            </label>
        )}

            {/* Select */}
            <select
                name={name}
                id={htmlFor}
                value={value}
                onChange={onChange}
                className={`
                    w-80
                    h-10
                    rounded-md
                    border
                    px-4
                    horver:border
                    border:border-2
                    hover:border-focus-border

                    ${error ? "border-red-600" : "border-gray-300"}
                `}
                    >
                   <option value="">Seleccione una opción</option> 

                   {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                   ))}
                </select>
                {error && (
                <p className="text-caption text-red-800 place-self-start mt-1">{error}</p>
            )}
        </div>
         //este es el contenido del selector , primera opcion dise que selecicone una opcion

         //aca abajo cuando oprimo sale el menu de opciones en este caso salen 4, el map es el mapeo el mapear que cogiamos un arreglo recorra el arrelog y recorra el json lo que tiene, cada se le coloco opt pero cada uno se llama option con eso vamos a la key que lo nesecita react pra ir a contextualizar donde tiene que buscar el value es lo que diga y el lebale que lo tenemos en el json que lo va a decir. 
    )
}