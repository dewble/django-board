import json
import requests


def obj_to_post(obj):
    # convert object to dict

    post = dict(vars(obj))
    # convert post dict to string

    if obj.modify_dt:
        post['modify_dt'] = obj.modify_dt.strftime('%Y-%m-%d %H:%M')
    else:
        post['modify_dt'] = ''

    if obj.tags:
        post['tags'] = [tag.name for tag in obj.tags.all()]
    else:
        post['tags'] = []

    if obj.owner:
        post['owner'] = obj.owner.username
    else:
        post['owner'] = 'Anonymous'

    del post['_state']

    return post

def prev_next_post(obj):
    # 이전 포스트가 없을 경우 error가 발생할 수 있다. try-except
    try:
        prevObj = obj.get_prev()
        prevDict = {'id': prevObj.id, 'title': prevObj.title}
    except obj.DoesNotExist as e:
        prevDict = {}

    try:
        nextObj = obj.get_next()
        nextDict = {'id': nextObj.id, 'title': nextObj.title}
    except obj.DoesNotExist as e:
        nextDict = {}

    return prevDict, nextDict

def make_tag_cloud(qsTag):
    minCount = min(tag.count for tag in qsTag)
    maxCount = max(tag.count for tag in qsTag)

    def get_weight_func(minWeight, maxWeight):
        if minCount == maxCount:
            factor = 1.0
        else:
            factor = (maxWeight - minWeight) / (maxCount - minCount)

        def func(count):
            weight = round(minWeight + (factor * (count - minCount)))
            return weight

        return func

    weight_func = get_weight_func(1, 5)
    tagList = []
    for tag in qsTag:
        weight = weight_func(tag.count)
        tagList.append({
            'name': tag.name,
            'count': tag.count,
            'weight': weight,
        })

    return tagList


# def post_to_slack(message):
#     webhook_url = 'https://hooks.slack.com/services/T01J1JFGRF1/B031M5FH'
#     message=[{
#     		"type": "section",
#     		"text": {
#     			"type": "mrkdwn",
#     			"text": "Danny Torrence left the following review for your property:"
#     		}
#     	}]
#     slack_data = json.dumps({'blocks': message})
#     response = requests.post(
#         webhook_url, data=slack_data,
#         headers={'Content-Type': 'application/json'}
#     )
#     # if response.status_code != 200:
#     #     raise ValueError(
#     #         'Request to slack returned an error %s, the response is:\n%s' % (response.status_code, response.text)
#     #     )
#     return response
#

