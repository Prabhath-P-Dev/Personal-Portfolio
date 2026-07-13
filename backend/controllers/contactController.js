import resend from "../config/resend";

export const sendMessage = async (req,res) => {
    try{
    const {name, email, message} = req.body;

    //validation
    if(!name || !email || !message){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }

    await resend.emails.send({
        from:"onboarding@resend.dev",
        to:process.env.EMAIL_USER,
        subject:"Portfolio contact form",
        text:`
        Name : ${name}
        email : ${email}
        message:${message}
        `,
        replyTo:email,
    });
    return res.status(200).json({message:"Message sent successfully"})
    }catch(error){
        console.error("Mail error:", error)
       return res.status(500).json({message:error.message})
    }
    
};