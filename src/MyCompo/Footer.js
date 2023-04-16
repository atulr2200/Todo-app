import React from 'react'

export default function Footer() {
    let footerStyle={
        position:"relative",
        top:"10vh",
        width:"100%",
        
    }
    
  return (
    <footer style={footerStyle}className="bg-dark text-light py-3">
            <p className="text-center">
                Copyright &copy; Mytodolist.com
            </p>
    </footer>
  )
}

