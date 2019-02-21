import api
import json
import sys

hmac_key = '91323df21431d41fc39ea85a78e6352f'
hmac_secret = '9997ad07e6621131276150e49f1ffe4d2fd4300ff13cad6074f382e4811ec091'

conn = api.hmac(hmac_key, hmac_secret)
#print json.dumps(conn.call('GET', '/api/myself/').json())
#print json.dumps(conn.call('POST', '/api/merchant/new_invoice/', {"description":"lntb1m1pwxatvnpp565vfsz33g0hgulcg42l6xl3etaa2jtjsmf2hvtpu302lcqsq4w5sdqqcqzysxqyz5vq0qfdfdxjh3kyk5nkr8dlajvrjqwpdg9v8xpqjnrzw2xfpv3jpvp3uc94gu03al3rpwsezu4cla05l2wk9l9760s2yc4xkduwq5h83lgqad7jxj", "currency":"BTC", "amount":"0.001"}).json())
invoice_id = sys.argv[1]
print invoice_id
print json.dumps(conn.call('GET', '/api/merchant/invoice/'+invoice_id+'/').json())


