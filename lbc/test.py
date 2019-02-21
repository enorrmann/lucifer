import api
import json
import sys
import api_connection

conn = api_connection.conn
#print json.dumps(conn.call('GET', '/api/myself/').json())
#print json.dumps(conn.call('POST', '/api/merchant/new_invoice/', {"description":"lntb1m1pwxatvnpp565vfsz33g0hgulcg42l6xl3etaa2jtjsmf2hvtpu302lcqsq4w5sdqqcqzysxqyz5vq0qfdfdxjh3kyk5nkr8dlajvrjqwpdg9v8xpqjnrzw2xfpv3jpvp3uc94gu03al3rpwsezu4cla05l2wk9l9760s2yc4xkduwq5h83lgqad7jxj", "currency":"BTC", "amount":"0.001"}).json())
invoice_id = sys.argv[1]
print json.dumps(conn.call('GET', '/api/merchant/invoice/'+invoice_id+'/').json())


