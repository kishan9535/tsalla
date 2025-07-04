import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, phone, enquiryType, message } = await request.json()

    // Validate required fields
    if (!fullName || !email || !phone || !enquiryType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content for the company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@tsallaaerospace.com',
      subject: `New Contact Form Submission - ${enquiryType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #007bff; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>This email was sent from the Tsalla Aerospace contact form on ${new Date().toLocaleString()}.</p>
          </div>
        </div>
      `,
    }

    // Confirmation email for the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Tsalla Aerospace',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p>Dear ${fullName},</p>
          
          <p>Thank you for contacting Tsalla Aerospace. We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
            <p><strong>Message:</strong></p>
            <p style="line-height: 1.6; white-space: pre-wrap; font-style: italic;">${message}</p>
          </div>
          
          <p>If you have any urgent inquiries, please feel free to contact us directly at:</p>
          <ul>
            <li><strong>Phone:</strong> 095357 20540</li>
            <li><strong>Email:</strong> info@tsallaaerospace.com</li>
          </ul>
          
          <p>Best regards,<br/>
          <strong>Tsalla Aerospace Team</strong></p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions)
    ])

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}