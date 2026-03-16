# Email API Fix - Deployment Guide

## Problem
Email sending fails on live domain (www.ahsanmalik.xyz) with 500 error, but works locally.

## Root Cause
1. Environment variable name mismatch: `RESEND_MAIL` vs `RESEND_API_KEY`
2. Missing error handling and validation
3. Incorrect email sender domain

## Solution

### Step 1: Update Environment Variables on Vercel/Hosting

Go to your hosting dashboard (Vercel, etc.) and update environment variables:

**OLD (Remove):**
```
RESEND_MAIL=re_8GX7iGfa_4yucaFNsrv4gw5tKqRgE69eP
```

**NEW (Add):**
```
RESEND_API_KEY=re_8GX7iGfa_4yucaFNsrv4gw5tKqRgE69eP
```

### Step 2: Verify Resend Configuration

1. Go to https://resend.com/api-keys
2. Copy your API key
3. Add to environment variables as `RESEND_API_KEY`

### Step 3: Update Email Sender Domain

The email sender must be from your verified domain or Resend's default domain.

**Option A: Use Resend Default (Easiest)**
```
from: 'noreply@resend.dev'
```

**Option B: Use Your Domain (Requires DNS Setup)**
```
from: 'noreply@ahsanmalik.xyz'
```

To use your domain:
1. Go to Resend Dashboard
2. Add your domain (ahsanmalik.xyz)
3. Follow DNS verification steps
4. Update the `from` field in the email route

### Step 4: Redeploy

After updating environment variables:

**For Vercel:**
```bash
git push origin main
# Vercel auto-deploys
```

**For Other Hosting:**
```bash
npm run build
npm run start
```

### Step 5: Test Email

1. Go to https://www.ahsanmalik.xyz/contact
2. Fill out the form
3. Submit
4. Check your email (mahsanraza3222@gmail.com)

## Troubleshooting

### Still Getting 500 Error?

1. **Check Environment Variables:**
   - Verify `RESEND_API_KEY` is set correctly
   - No typos or extra spaces

2. **Check API Key:**
   - Go to https://resend.com/api-keys
   - Verify key is active and not revoked
   - Copy exact key without spaces

3. **Check Email Sender:**
   - If using custom domain, verify DNS records
   - Use `noreply@resend.dev` as fallback

4. **Check Logs:**
   - Vercel: Dashboard → Logs
   - Check for specific error messages

### Email Goes to Spam?

1. Add SPF record:
   ```
   v=spf1 include:resend.com ~all
   ```

2. Add DKIM record:
   - Get from Resend dashboard
   - Add to your DNS

3. Add DMARC record:
   ```
   v=DMARC1; p=none; rua=mailto:your-email@example.com
   ```

## Files Updated

1. **app/api/send-email/route.ts**
   - Fixed environment variable name
   - Added input validation
   - Added error handling
   - Added email sanitization
   - Improved HTML template

2. **.env**
   - Changed `RESEND_MAIL` to `RESEND_API_KEY`

3. **.env.example**
   - Created for documentation

## Quick Checklist

- [ ] Update `RESEND_API_KEY` in hosting environment variables
- [ ] Remove old `RESEND_MAIL` variable
- [ ] Redeploy application
- [ ] Test email form on live domain
- [ ] Check email arrives in inbox
- [ ] Verify no spam folder

## Support

If issues persist:
1. Check Resend status: https://status.resend.com
2. Review Resend docs: https://resend.com/docs
3. Check email logs in Resend dashboard
