import { useState } from 'react'
import { CheckCircle2, Copy, ExternalLink, MessageSquare, Send, Star, UserCheck } from 'lucide-react'

interface ReviewRequest {
  id: string
  clientName: string
  clientPhone: string
  clientEmail: string
  serviceName: string
  completedDate: string
  status: 'pending' | 'sent'
  sentAt?: string
}

const INITIAL_REQUESTS: ReviewRequest[] = [
  {
    id: 'req-1',
    clientName: 'Sarah Jenkins',
    clientPhone: '(555) 234-5678',
    clientEmail: 'sarah.j@example.com',
    serviceName: 'Weekly Lawn Mowing',
    completedDate: '2026-08-03',
    status: 'sent',
    sentAt: '2026-08-03 14:30',
  },
  {
    id: 'req-2',
    clientName: 'Robert Vance',
    clientPhone: '(555) 876-5432',
    clientEmail: 'rvance@example.com',
    serviceName: 'Hedge & Shrub Trimming',
    completedDate: '2026-08-03',
    status: 'pending',
  },
  {
    id: 'req-3',
    clientName: 'Amanda Miller',
    clientPhone: '(555) 345-6789',
    clientEmail: 'amanda.m@example.com',
    serviceName: 'Seasonal Yard Cleanup',
    completedDate: '2026-08-02',
    status: 'pending',
  },
]

export default function ReviewAutomation() {
  const [googleReviewLink, setGoogleReviewLink] = useState('https://g.page/r/landscaping-and-moore/review')
  const [requests, setRequests] = useState<ReviewRequest[]>(INITIAL_REQUESTS)
  const [smsTemplate, setSmsTemplate] = useState(
    'Hi {name}! Thank you for choosing Landscaping And Moore. How did your recent {service} visit turn out? Please leave us a 5-star review here: {link}'
  )
  const [copiedId, setCopiedId] = useState<string | null>(null)

  function sendReviewRequest(id: string) {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: 'sent', sentAt: new Date().toLocaleString() } : r
      )
    )
  }

  function copySmsText(req: ReviewRequest) {
    const msg = smsTemplate
      .replace('{name}', req.clientName)
      .replace('{service}', req.serviceName)
      .replace('{link}', googleReviewLink)
    navigator.clipboard.writeText(msg)
    setCopiedId(req.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const sentCount = requests.filter((r) => r.status === 'sent').length

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-forest-900">
            Review Request Automation
          </h1>
          <p className="mt-1 text-sm text-ink-600">
            Automate SMS & email review requests for completed appointments to build review velocity from day one.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-forest-50 px-4 py-2 rounded-xl border border-forest-100 shrink-0">
          <Star className="w-5 h-5 text-lemon-500 fill-lemon-400" />
          <span className="font-display font-semibold text-forest-900">{sentCount} / {requests.length} Sent</span>
        </div>
      </div>

      {/* Review Link Configuration */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-card p-6 space-y-4">
        <h2 className="font-display text-lg font-semibold text-forest-900 flex items-center gap-2">
          <ExternalLink className="w-4 h-4 text-forest-700" />
          Google Business Review Link
        </h2>
        <div className="grid sm:grid-cols-12 gap-3">
          <input
            type="url"
            className="input sm:col-span-9"
            value={googleReviewLink}
            onChange={(e) => setGoogleReviewLink(e.target.value)}
            placeholder="https://g.page/r/your-google-review-link"
          />
          <button
            onClick={() => window.open(googleReviewLink, '_blank')}
            className="btn-secondary sm:col-span-3 justify-center"
          >
            Test Link
          </button>
        </div>
        <div>
          <label className="label">Default SMS Message Template</label>
          <textarea
            rows={2}
            className="input mt-1.5"
            value={smsTemplate}
            onChange={(e) => setSmsTemplate(e.target.value)}
          />
        </div>
      </div>

      {/* Recent Completed Appointments Table */}
      <div className="bg-white rounded-2xl border border-ink-100 shadow-card overflow-hidden">
        <div className="p-6 border-b border-ink-100 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-forest-900 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-forest-700" />
            Completed Appointments Ready for Review Request
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-cream-50 text-ink-500 uppercase text-[11px] tracking-wider border-b border-ink-100">
              <tr>
                <th className="p-4">Client</th>
                <th className="p-4">Service</th>
                <th className="p-4">Completed Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {requests.map((req) => (
                <tr key={req.id} className="hover:bg-cream-50/50">
                  <td className="p-4">
                    <div className="font-medium text-forest-900">{req.clientName}</div>
                    <div className="text-xs text-ink-500">{req.clientPhone} · {req.clientEmail}</div>
                  </td>
                  <td className="p-4 font-medium text-ink-800">{req.serviceName}</td>
                  <td className="p-4 text-ink-600">{req.completedDate}</td>
                  <td className="p-4">
                    {req.status === 'sent' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-forest-50 text-forest-800 border border-forest-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-600" />
                        Sent ({req.sentAt})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-lemon-400/20 text-ink-800 border border-lemon-400/40">
                        Pending Request
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => copySmsText(req)}
                        className="btn-secondary text-xs px-3 py-1.5"
                        title="Copy formatted SMS text"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        {copiedId === req.id ? 'Copied!' : 'Copy SMS'}
                      </button>
                      {req.status !== 'sent' ? (
                        <button
                          onClick={() => sendReviewRequest(req.id)}
                          className="btn-primary text-xs px-3 py-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Send Request
                        </button>
                      ) : (
                        <button
                          onClick={() => sendReviewRequest(req.id)}
                          className="btn-secondary text-xs px-3 py-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Resend
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
